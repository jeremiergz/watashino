import ThemeProvider from 'components/providers/ThemeProvider';
import * as Gatsby from 'gatsby';
import toHast from 'mdast-util-to-hast';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import parse from 'remark-parse';
import unified from 'unified';
import { renderASTToJSX } from '..';

describe('utils/HTML Test Suite', () => {
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
    const md = [
      '[Gatsby](https://www.gatsbyjs.org)',
      '> blockquote',
      '`inline code`',
      '```\ncode\n```',
      '# h1',
      '## h2',
      '### h3',
      '#### h4',
      '---',
      'text',
    ].join('\n\n');
    const mdast = unified().use(parse).parse(md);
    const jsx = <ThemeProvider>{renderASTToJSX(toHast(mdast))}</ThemeProvider>;
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
