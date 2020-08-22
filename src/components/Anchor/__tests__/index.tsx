import ThemeProvider from 'components/providers/ThemeProvider';
import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Anchor from '..';

describe('components/Anchor Test Suite', () => {
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
    const jsx = (
      <ThemeProvider>
        <Anchor variant="underlined">Anchor Component</Anchor>
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });

  it('should use target="_blank" on desktop devices by default', () => {
    Object.assign(window.navigator, { maxTouchPoints: 0 });
    const jsx = (
      <ThemeProvider>
        <Anchor variant="underlined">Anchor Component</Anchor>
      </ThemeProvider>
    );
    const renderedInstance = ReactTestRenderer.create(jsx).root;
    expect(renderedInstance.findByType('a').props.target).toBe('_blank');
  });

  it('should use target="_self" on touch devices by default', () => {
    Object.assign(window.navigator, { maxTouchPoints: 4 });
    const jsx = (
      <ThemeProvider>
        <Anchor variant="underlined">Anchor Component</Anchor>
      </ThemeProvider>
    );
    const renderedInstance = ReactTestRenderer.create(jsx).root;
    expect(renderedInstance.findByType('a').props.target).toBe('_self');
  });
});
