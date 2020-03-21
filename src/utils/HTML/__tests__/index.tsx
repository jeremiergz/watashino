import toHast from 'mdast-util-to-hast';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import parse from 'remark-parse';
import { ThemeProvider } from 'styled-components';
import unified from 'unified';
import { renderASTToJSX } from '..';
import { DarkTheme } from '../../../theme';

describe('utils/HTML Test Suite', () => {
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
    const jsx = <ThemeProvider theme={DarkTheme}>{renderASTToJSX(toHast(mdast))}</ThemeProvider>;
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
