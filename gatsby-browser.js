import '@/styles/global.css';
import 'typeface-open-sans';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import SEO from '@/components/common/SEO';
import React from 'react';

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
