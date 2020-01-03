import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Anchor from '..';
import { DarkTheme } from '../../../../theme';

describe('components/widgets/Link Test Suite', () => {
    it('matches snapshot', () => {
        const jsx = (
            <ThemeProvider theme={DarkTheme}>
                <Anchor variant="underlined">Anchor Component</Anchor>
            </ThemeProvider>
        );
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
});
