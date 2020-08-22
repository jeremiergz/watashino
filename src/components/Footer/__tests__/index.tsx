import ThemeProvider from 'components/providers/ThemeProvider';
import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Footer from '..';

describe('components/Footer Test Suite', () => {
  beforeAll(() => {
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          license: 'Test-Licence',
          repository: { url: 'git+https://test-repository.git' },
          version: '3.16.120',
        },
      },
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
    const jsx = (
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
