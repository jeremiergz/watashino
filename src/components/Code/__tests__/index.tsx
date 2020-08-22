import Code from 'components/Code';
import ThemeProvider from 'components/providers/ThemeProvider';
import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

describe('components/Code Test Suite', () => {
  beforeAll(() => {
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => ({
      themeJson: {
        colors: {
          black: '#212121',
          dark: '#424242',
          error: '#f44336',
          gray: '#757575',
          info: '#2196f3',
          lightgray: '#e0e0e0',
          primary: '#31859a',
          secondary: '#17365c',
          success: '#4caf50',
          vsCodeDark: '#1e1e1e',
          white: '#fafafa',
        },
        fonts: {
          main: "'Open Sans', sans-serif",
        },
        fontWeights: {
          bold: 800,
          regular: 400,
          semiBold: 600,
        },
      },
    }));
  });

  it('matches snapshot', () => {
    const blockCodeJSX = (
      <ThemeProvider>
        <Code className="code">Code Component</Code>
      </ThemeProvider>
    );
    const inlineCodeJSX = (
      <ThemeProvider>
        <Code>Code Component</Code>
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(blockCodeJSX).toJSON()).toMatchSnapshot();
    expect(ReactTestRenderer.create(inlineCodeJSX).toJSON()).toMatchSnapshot();
  });
});
