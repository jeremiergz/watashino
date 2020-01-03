import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../../../../theme';
import Code from '../../Code';

describe('components/widgets/Code Test Suite', () => {
  it('matches snapshot', () => {
    const jsx = (
      <ThemeProvider theme={DarkTheme}>
        <Code>Code Component</Code>
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
