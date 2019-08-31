import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Content from '..';

describe('components/Layout/Content Test Suite', () => {
    beforeAll(() => {
        const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
        useStaticQuery.mockImplementation(() => ({
            site: {
                siteMetadata: {
                    title: 'SEO Test title',
                    description: 'SEO Test description.',
                    author: 'SEO Test author',
                },
            },
        }));
    });

    it('matches snapshot', () => {
        const jsx = (
            <Content description="SEO Test description" keywords={['test']} lang="en" title="SEO Test">
                Content Component
            </Content>
        );
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
});
