import React, { HTMLAttributes } from 'react';
import Heading from '../../widgets/Heading';
import SEO, { SEOProps } from '../../widgets/SEO';

type Props = Pick<HTMLAttributes<HTMLElement>, 'children'> &
    SEOProps & {
        title: string;
    };

const ContentComponent = ({ children, description, keywords, lang, meta, title }: Props) => {
    return (
        <>
            <SEO description={description} keywords={keywords} lang={lang} meta={meta} title={title} />
            <Heading as="h1">{title}</Heading>
            {children}
        </>
    );
};

ContentComponent.displayName = 'Content';

export default ContentComponent;
