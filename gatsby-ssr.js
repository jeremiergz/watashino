import ThemeProvider from 'components/providers/ThemeProvider';
import ThemeToggle from 'components/providers/ThemeProvider/ThemeToggle';
import React from 'react';
import 'styles/global.css';

const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <ThemeToggle />
      {element}
    </ThemeProvider>
  );
};

export { wrapRootElement };
