import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Anchor from '..';
import { DarkTheme } from '../../../../theme';

describe('components/common/Link Test Suite', () => {
  it('matches snapshot', () => {
    const jsx = (
      <ThemeProvider theme={DarkTheme}>
        <Anchor variant="underlined">Anchor Component</Anchor>
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });

  it('should use target="_blank" on desktop devices by default', () => {
    Object.assign(window.navigator, { maxTouchPoints: 0 });
    const jsx = (
      <ThemeProvider theme={DarkTheme}>
        <Anchor variant="underlined">Anchor Component</Anchor>
      </ThemeProvider>
    );
    const renderedInstance = ReactTestRenderer.create(jsx).root;
    expect(renderedInstance.findByType('a').props.target).toBe('_blank');
  });

  it('should use target="_self" on touch devices by default', () => {
    Object.assign(window.navigator, { maxTouchPoints: 4 });
    const jsx = (
      <ThemeProvider theme={DarkTheme}>
        <Anchor variant="underlined">Anchor Component</Anchor>
      </ThemeProvider>
    );
    const renderedInstance = ReactTestRenderer.create(jsx).root;
    expect(renderedInstance.findByType('a').props.target).toBe('_self');
  });
});
