import '@/styles/global.css';
import 'typeface-open-sans';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import SEO from '@/components/common/SEO';
import React from 'react';

export const onRenderBody = ({ setBodyAttributes, setHtmlAttributes }) => {
  setHtmlAttributes({
    class: 'dark',
    lang: 'en',
  });
  setBodyAttributes({
    class: 'dark:bg-gray-900 transition-colors',
  });
};

export const wrapRootElement = ({ element }) => {
  return (
    <ErrorBoundary>
      <React.StrictMode>
        <SEO />
        {element}
      </React.StrictMode>
    </ErrorBoundary>
  );
};
