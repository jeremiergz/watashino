import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../../../../theme';
import InlineCode from '../../InlineCode';

describe('components/widgets/InlineCode Test Suite', () => {
  it('matches snapshot', () => {
    const jsx = (
      <ThemeProvider theme={DarkTheme}>
        <InlineCode>InlineCode Component</InlineCode>
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
