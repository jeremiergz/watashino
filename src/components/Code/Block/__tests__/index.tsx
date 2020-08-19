import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from 'theme';
import BlockCode from '..';

describe('components/common/Code/Block Test Suite', () => {
  it('matches snapshot', () => {
    const jsx = (
      <ThemeProvider theme={DarkTheme}>
        <BlockCode>BlockCode Component</BlockCode>
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
