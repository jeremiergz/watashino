import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Footer from '..';
import theme from '../../../theme';

describe('components/Footer Test Suite', () => {
    beforeAll(() => {
        const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
        useStaticQuery.mockImplementation(() => ({
            packageJson: {
                license: 'Test-Licence',
                repository: { url: 'git+https://test-repository.git' },
                version: '3.16.120',
            },
        }));
    });

    it('matches snapshot', () => {
        const jsx = (
            <ThemeProvider theme={theme}>
                <Footer />
            </ThemeProvider>
        );
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
});
