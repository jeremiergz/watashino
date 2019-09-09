import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Flex from '../components/primitives/Flex';
import Text from '../components/primitives/Text';
import Chip from '../components/widgets/Chip';
import PreviousNextNavigation from '../components/widgets/PreviousNextNavigation';
import theme, { Theme } from '../theme';
import { getMonthAndDay } from '../utils/Date';
import { renderASTToJSX } from '../utils/HTML';

type PostProps = {
    data: GraphQL.PostDataQuery;
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

const Post = ({ data, pageContext }: PostProps) => {
    const { next, previous } = pageContext;
    const {
        markdownRemark: {
            frontmatter: { date: rawDate, keywords: rawKeywords, title },
            htmlAst,
        },
    } = data;
    const date = new Date(rawDate);
    const keywords = rawKeywords.split(',');
    const [month, day] = getMonthAndDay(date);
    const displayedDate = `${day} ${month} ${date.getFullYear()}`;
    const renderedJSX = renderASTToJSX(htmlAst);
    return (
        <Layout>
            <Layout.Content keywords={keywords} title={title} type="post">
                <Flex
                    alignItems="center"
                    flexDirection={{ _: 'column', tablet: 'row-reverse' }}
                    justifyContent="center"
                >
                    <Chips flexWrap="wrap" justifyContent="center">
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
                {renderedJSX}
                <PreviousNextNavigation marginTop={5} next={next} previous={previous} />
            </Layout.Content>
        </Layout>
    );
};

export const query = graphql`
    query PostData($path: String!) {
        markdownRemark(frontmatter: { slug: { eq: $path } }) {
            htmlAst
            frontmatter {
                date
                keywords
                title
            }
        }
    }
`;
export { PostProps };
export default Post;
