import Chip from 'components/Chip';
import Layout from 'components/Layout';
import PreviousNextNavigation from 'components/PreviousNextNavigation';
import Flex from 'components/primitives/FlexBox';
import Text from 'components/primitives/Text';
import { Theme, useTheming } from 'components/providers/ThemeProvider';
import React from 'react';
import styled from 'styled-components';
import { getMonthAndDay } from 'utils/Date';
import { renderASTToJSX } from 'utils/HTML';

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

const Post: React.FC<PostProps> = ({ pageContext }) => {
  const { theme } = useTheming();
  const {
    frontmatter: { date: rawDate, keywords: rawKeywords, slug, title },
    htmlAst,
    previous,
    next,
    timeToRead,
  } = pageContext;
  const date = new Date(rawDate);
  const keywords = rawKeywords.split(',');
  const [month, day] = getMonthAndDay(date);
  const displayedDate = `${day} ${month} ${date.getFullYear()}`;
  const renderedJSX = renderASTToJSX(htmlAst);
  return (
    <Layout>
      <Layout.Content keywords={keywords} path={slug} title={title} type="post">
        <Flex alignItems="center" flexDirection={{ _: 'column', tablet: 'row-reverse' }} justifyContent="center">
          <Chips flexWrap="wrap" justifyContent="center">
            {keywords.map(keyword => (
              <Chip color={theme.colors.primary} key={keyword} marginBottom={{ _: 2, tablet: 0 }} marginX={1}>
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
            fontWeight="semiBold"
            marginRight={{ _: 0, tablet: 3 }}
            paddingBottom={{ _: 0, tablet: '2px' }}
          >
            {displayedDate}
          </Text>
        </Flex>
        <Text color="gray" fontSize={14}>
          {timeToRead} min read
        </Text>
        <PreviousNextNavigation marginBottom={5} marginTop={3} next={next} previous={previous} />
        {renderedJSX}
        <PreviousNextNavigation marginTop={5} next={next} previous={previous} />
      </Layout.Content>
    </Layout>
  );
};

export type PostProps = {
  pageContext: {
    htmlAst: any;
    frontmatter: {
      date: string;
      keywords: string;
      slug: string;
      title: string;
    };
    next: string;
    previous: string;
    timeToRead: number;
  };
};
export default Post;
