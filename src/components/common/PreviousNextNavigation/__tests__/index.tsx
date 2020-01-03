import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../../../../theme';
import PreviousNextNavigation from '../../PreviousNextNavigation';

describe('components/widgets/PreviousNextNavigation Test Suite', () => {
  it('matches snapshot', () => {
    const jsx = (
      <ThemeProvider theme={DarkTheme}>
        <PreviousNextNavigation next="/next" previous="/previous">
          PreviousNextNavigation Component
        </PreviousNextNavigation>
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
