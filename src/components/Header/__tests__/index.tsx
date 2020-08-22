import ThemeProvider from 'components/providers/ThemeProvider';
import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Header from '..';

describe('components/Header Test Suite', () => {
  beforeAll(() => {
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => ({
      allMarkdownRemark: {
        totalCount: 1,
      },
      allNavigationJson: {
        nodes: [
          {
            icon: 'icon',
            ignoreInNavigation: false,
            keywords: [],
            name: 'Test',
            navOrder: 0,
            to: '/',
          },
        ],
      },
      dataJson: {
        jobTitle: 'Full Stack Engineer',
      },
      file: {
        childImageSharp: {
          fixed: {
            base64: 'data:image/png;base64',
            aspectRatio: 1,
            src: '/static/89ee547c5db6cbf9b37a682e8b3f3f57/8b091/profile-pic.png',
            srcSet:
              '/static/89ee547c5db6cbf9b37a682e8b3f3f57/8b091/profile-pic.png 1x,\n/static/89ee547c5db6cbf9b37a682e8b3f3f57/1e576/profile-pic.png 1.5x,\n/static/89ee547c5db6cbf9b37a682e8b3f3f57/6cb10/profile-pic.png 2x',
          },
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
        <Header />
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
