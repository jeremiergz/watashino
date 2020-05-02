import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../../../../theme';
import Code from '../../Code';

describe('components/common/Code Test Suite', () => {
  it('matches snapshot', () => {
    const blockCodeJSX = (
      <ThemeProvider theme={DarkTheme}>
        <Code className="code">Code Component</Code>
      </ThemeProvider>
    );
    const inlineCodeJSX = (
      <ThemeProvider theme={DarkTheme}>
        <Code>Code Component</Code>
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(blockCodeJSX).toJSON()).toMatchSnapshot();
    expect(ReactTestRenderer.create(inlineCodeJSX).toJSON()).toMatchSnapshot();
  });
});
