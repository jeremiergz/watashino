import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Code from '..';
import theme from '../../../../theme';

describe('components/widgets/Code Test Suite', () => {
    it('matches snapshot', () => {
        const jsx = (
            <ThemeProvider theme={theme}>
                <Code>Code Component</Code>
            </ThemeProvider>
        );
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
});
