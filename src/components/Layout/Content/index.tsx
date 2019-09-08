import React, { HTMLAttributes } from 'react';
import Box from '../../primitives/Box';
import Heading from '../../widgets/Heading';
import SEO, { SEOProps } from '../../widgets/SEO';

type ContentProps = Pick<HTMLAttributes<HTMLElement>, 'children'> &
    Omit<SEOProps, 'title'> & {
        title?: string;
        type: 'post' | 'section';
    };

const typesMapping = {
    post: 'article',
    section: 'section',
} as const;

const Content = ({ children, description, keywords, lang, meta, title, type }: ContentProps) => {
    return (
        <>
            <SEO description={description} keywords={keywords} lang={lang} meta={meta} title={title} />
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
