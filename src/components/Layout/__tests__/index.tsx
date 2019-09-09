import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Layout from '..';

describe('components/Layout Test Suite', () => {
    beforeAll(() => {
        const nodes = [
            {
                icon: 'icon',
                ignoreInNavigation: false,
                keywords: [],
                name: 'Test',
                navOrder: 0,
                to: '/',
            },
        ];
        const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
        useStaticQuery
            .mockImplementationOnce(() => ({
                allNavigationJson: { nodes },
                dataJson: { jobTitle: 'Full Stack Engineer' },
                file: {
                    childImageSharp: {
                        fixed: {
                            base64: 'data:image/png;base64',
                            aspectRatio: 1,
                            src: '/static/89ee547c5db6cbf9b37a682e8b3f3f57/8b091/profile-pic.png',
                            srcSet:
                                '/static/89ee547c5db6cbf9b37a682e8b3f3f57/8b091/profile-pic.png 1x,\n/static/89ee547c5db6cbf9b37a682e8b3f3f57/1e576/profile-pic.png 1.5x,\n/static/89ee547c5db6cbf9b37a682e8b3f3f57/6cb10/profile-pic.png 2x',
                        },
                    },
                },
            }))
            .mockImplementationOnce(() => ({
                allNavigationJson: { nodes },
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
        const jsx = <Layout>Layout Component</Layout>;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
});
