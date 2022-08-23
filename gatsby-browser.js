import '@/styles/global.css';
import 'typeface-open-sans';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import React from 'react';

export const onClientEntry = () => {
  window.addEventListener('load', () => {
    document.documentElement.classList.add('dark');
  });
};

export const wrapRootElement = ({ element }) => {
  return (
    <ErrorBoundary>
      <React.StrictMode>{element}</React.StrictMode>
    </ErrorBoundary>
  );
};
