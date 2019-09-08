/* eslint-disable react/display-name */
import { graphql } from 'gatsby';
import React, { createElement } from 'react';
import RehypeReact from 'rehype-react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Box from '../components/primitives/Box';
import Flex from '../components/primitives/Flex';
import Text from '../components/primitives/Text';
import Chip from '../components/widgets/Chip';
import Heading from '../components/widgets/Heading';
import Link from '../components/widgets/Link';
import Paragraph from '../components/widgets/Paragraph';
import PreviousNextNavigation from '../components/widgets/PreviousNextNavigation';
import theme, { Theme } from '../theme';
import { lightenColor } from '../utils/CSS';
import { getMonthAndDay } from '../utils/Date';

type PostsProps = {
    data: GraphQL.PostQueryQuery;
    pageContext: {
        next: string;
        previous: string;
    };
};

const Chips = styled(Flex)`
    @media screen and (min-width: ${({ theme }: { theme: Theme }) => theme.breakpoints[3]}) {
        > :first-child {
            margin-left: 0;
        }
        > :last-child {
            margin-right: 0;
        }
    }
`;

const Posts = ({ data, pageContext }: PostsProps) => {
    const { next, previous } = pageContext;
    const {
        markdownRemark: {
            frontmatter: { date: rawDate, keywords: rawKeywords, title },
            html,
            htmlAst,
        },
    } = data;
    const renderAst = new RehypeReact({
        components: {
            a: ({ children, href }) => (
                <Link external to={href}>
                    {children}
                </Link>
            ),
            blockquote: ({ children }) => (
                <Flex
                    as="blockquote"
                    backgroundColor={lightenColor(theme.colors.primary, 0.33)}
                    borderRadius={8}
                    paddingX={4}
                >
                    {children}
                </Flex>
            ),
            // code: ({ children }) => (
            //     <Text
            //         as="code"
            //         backgroundColor="dark"
            //         borderRadius={8}
            //         color="white"
            //         display="inline-block"
            //         lineHeight="20px"
            //         paddingX={3}
            //         paddingY={2}
            //     >
            //         {children}
            //     </Text>
            // ),
            h1: ({ children }) => <Heading variant="h1">{children}</Heading>,
            h2: ({ children }) => <Heading variant="h2">{children}</Heading>,
            h3: ({ children }) => <Heading variant="h3">{children}</Heading>,
            h4: ({ children }) => <Heading variant="h4">{children}</Heading>,
            hr: () => <Box as="hr" borderWidth={1} color="gray" marginX={4} marginY={5} />,
            p: Paragraph,
        },
        createElement: createElement,
    }).Compiler;
    const date = new Date(rawDate);
    const keywords = rawKeywords.split(',');
    const [month, day] = getMonthAndDay(date);
    const displayedDate = `${day} ${month} ${date.getFullYear()}`;
    const renderedHTML = renderAst(htmlAst);
    return (
        <Layout>
            <Layout.Content keywords={keywords} title={title} type="post">
                <Flex
                    alignItems="center"
                    flexDirection={{ _: 'column', tablet: 'row-reverse' }}
                    justifyContent="center"
                >
                    <Chips flexWrap="wrap" justifyContent="center" marginTop={{ tablet: '2px' }}>
                        {keywords.map(keyword => (
                            <Chip
                                color={theme.colors.primary}
                                key={keyword}
                                marginBottom={{ _: 2, tablet: 0 }}
                                marginX={1}
                            >
                                {keyword}
                            </Chip>
                        ))}
                    </Chips>
                    <Text
                        as="time"
                        color="gray"
                        dateTime={date.toString()}
                        display="block"
                        fontSize={24}
                        fontWeight="semi-bold"
                        marginRight={{ _: 0, tablet: 3 }}
                        paddingBottom={{ _: 0, tablet: '2px' }}
                    >
                        {displayedDate}
                    </Text>
                </Flex>
                <PreviousNextNavigation marginBottom={5} marginTop={3} next={next} previous={previous} />
                {renderedHTML}
                <Box dangerouslySetInnerHTML={{ __html: html }} />
                <PreviousNextNavigation marginTop={5} next={next} previous={previous} />
            </Layout.Content>
        </Layout>
    );
};

export const query = graphql`
    query PostQuery($path: String!) {
        markdownRemark(frontmatter: { slug: { eq: $path } }) {
            html
            htmlAst
            frontmatter {
                date
                keywords
                title
            }
        }
    }
`;
export { PostsProps };
export default Posts;
