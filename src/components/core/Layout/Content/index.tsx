import React, { HTMLAttributes } from 'react';
import Heading from '../../../common/Heading';
import SEO from '../../../common/SEO';
import Box from '../../../primitives/Box';

type ContentProps = Pick<HTMLAttributes<HTMLElement>, 'children'> &
  Omit<SEO, 'title'> & {
    path: string;
    title?: string;
    type: 'post' | 'section';
  };

const typesMapping = {
  post: 'article',
  section: 'section',
} as const;

const Content = ({ children, description, keywords, lang, path, title, type }: ContentProps) => {
  return (
    <>
      <SEO description={description} keywords={keywords} lang={lang} path={path} title={title} />
      {title && (
        <Heading marginTop={0} variant="h1">
          {title}
        </Heading>
      )}
      <Box as={typesMapping[type]}>{children}</Box>
    </>
  );
};

Content.displayName = 'Content';

export default Content;
