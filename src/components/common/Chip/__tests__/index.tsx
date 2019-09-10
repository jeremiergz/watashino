import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import theme from '../../../../theme';
import Chip from '../../Chip';

describe('components/widgets/Chip Test Suite', () => {
    it('matches snapshot', () => {
        const jsx = (
            <ThemeProvider theme={theme}>
                <Chip>Chip Component</Chip>
            </ThemeProvider>
        );
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
});
