import React, { FunctionComponent, HTMLAttributes } from 'react';
import Heading from '../../../common/Heading';
import SEO, { SEOProps } from '../../../common/SEO';
import Box from '../../../primitives/Box';

const typesMapping = {
  post: 'article',
  section: 'section',
} as const;

const Content: FunctionComponent<ContentProps> = ({ children, description, keywords, lang, path, title, type }) => {
  return (
    <>
      <SEO description={description} keywords={keywords} lang={lang} path={path} title={title} />
      {title && (
        <Heading marginBottom={4} marginTop={0} variant="h1">
          {title}
        </Heading>
      )}
      <Box as={typesMapping[type]}>{children}</Box>
    </>
  );
};

Content.displayName = 'Content';

export type ContentProps = Pick<HTMLAttributes<HTMLElement>, 'children'> &
  Omit<SEOProps, 'title'> & {
    path: string;
    title?: string;
    type: 'post' | 'section';
  };
export default Content;
