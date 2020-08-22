import { act, renderHook } from '@testing-library/react-hooks';
import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ThemeProvider, { useTheming } from '..';

describe('components/providers/ThemeProvider Test Suite', () => {
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
    const jsx = <ThemeProvider>ThemeProvider Component</ThemeProvider>;
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });

  it('should change theme accordingly', () => {
    const wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;
    const { result } = renderHook(() => useTheming(), { wrapper });
    expect(result.current.theme.type).toBe('light');
    act(() => {
      result.current.toggle();
    });
    expect(result.current.theme.type).toBe('dark');
  });
});
