import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ThemingManager, { useTheming } from '..';

describe('components/core/ThemingManager Test Suite', () => {
  it('matches snapshot', () => {
    const jsx = <ThemingManager>ThemingManager Component</ThemingManager>;
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });

  it('should change theme accordingly', () => {
    const wrapper = ({ children }) => <ThemingManager>{children}</ThemingManager>;
    const { result } = renderHook(() => useTheming(), { wrapper });
    expect(result.current.mode).toBe('light');
    act(() => {
      result.current.toggle();
    });
    expect(result.current.mode).toBe('dark');
  });
});
