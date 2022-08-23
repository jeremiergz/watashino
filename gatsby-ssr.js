import '@/styles/global.css';
import 'typeface-open-sans';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import React from 'react';

export const onRenderBody = ({ setBodyAttributes, setHtmlAttributes }) => {
  setHtmlAttributes({
    className: 'dark',
    lang: 'en',
  });
  setBodyAttributes({
    className: 'bg-primary-dark dark:bg-primary-dark',
  });
};

export const wrapRootElement = ({ element }) => {
  return (
    <ErrorBoundary>
      <React.StrictMode>{element}</React.StrictMode>
    </ErrorBoundary>
  );
};
