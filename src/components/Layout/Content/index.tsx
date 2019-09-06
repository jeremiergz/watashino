import React, { HTMLAttributes } from 'react';
import Heading from '../../widgets/Heading';
import SEO, { SEOProps } from '../../widgets/SEO';

type ContentProps = Pick<HTMLAttributes<HTMLElement>, 'children'> &
    SEOProps & {
        title: string;
    };

const Content = ({ children, description, keywords, lang, meta, title }: ContentProps) => {
    return (
        <>
            <SEO description={description} keywords={keywords} lang={lang} meta={meta} title={title} />
            <Heading variant="h1">{title}</Heading>
            {children}
        </>
    );
};

Content.displayName = 'Content';

export default Content;
