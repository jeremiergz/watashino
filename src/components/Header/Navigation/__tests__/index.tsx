import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Navigation from '../../Navigation';

describe('components/Layout/Header/Navigation Test Suite', () => {
    beforeAll(() => {
        const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
        useStaticQuery.mockImplementation(() => ({
            allNavigationJson: {
                nodes: [
                    {
                        icon: 'icon',
                        ignoreInNavigation: false,
                        keywords: [],
                        name: 'Test',
                        navOrder: 0,
                        to: '/',
                    },
                ],
            },
        }));
    });

    it('matches snapshot', () => {
        const jsx = <Navigation />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
});
