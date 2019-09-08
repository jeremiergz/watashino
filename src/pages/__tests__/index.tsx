import * as ReactGoogleMapsAPI from '@react-google-maps/api';
import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import NotFoundPage from '../404';
import AboutMePage from '../about-me';
import IndexPage from '..';
import PostsPage from '../posts';

describe('pages Test Suite', () => {
    beforeAll(() => {
        const childImageSharp = {
            fixed: {
                aspectRatio: 1,
                base64: 'data:image/png;base64',
                src: '/static/89ee547c5db6cbf9b37a682e8b3f3f57/8b091/profile-pic.png',
                srcSet:
                    '/static/89ee547c5db6cbf9b37a682e8b3f3f57/8b091/profile-pic.png 1x,\n/static/89ee547c5db6cbf9b37a682e8b3f3f57/1e576/profile-pic.png 1.5x,\n/static/89ee547c5db6cbf9b37a682e8b3f3f57/6cb10/profile-pic.png 2x',
            },
            fluid: {
                aspectRatio: 1,
                base64: 'data:image/png;base64',
                src: '/static/89ee547c5db6cbf9b37a682e8b3f3f57/8b091/profile-pic.png',
                srcSet:
                    '/static/89ee547c5db6cbf9b37a682e8b3f3f57/8b091/profile-pic.png 1x,\n/static/89ee547c5db6cbf9b37a682e8b3f3f57/1e576/profile-pic.png 1.5x,\n/static/89ee547c5db6cbf9b37a682e8b3f3f57/6cb10/profile-pic.png 2x',
            },
        };
        const jobTitle = 'Full Stack Engineer';
        const location = {
            country: 'USA',
            city: 'San Francisco',
            lat: 37.77493,
            lng: -122.41942,
        };
        const useLoadScript = jest.spyOn(ReactGoogleMapsAPI, 'useLoadScript');
        useLoadScript.mockImplementation(() => ({
            isLoaded: true,
            loadError: null,
            url: '',
        }));
        const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
        useStaticQuery.mockImplementation(() => ({
            allMarkdownRemark: {
                nodes: [{ frontmatter: { date: '2019-08-08', slug: '/posts/test', title: 'Test Post' } }],
            },
            companyImg: { childImageSharp },
            contactImgs: { nodes: [{ base: 'contact-image.png', childImageSharp }] },
            coverImg: { childImageSharp },
            dataJson: { jobTitle, location },
            file: { childImageSharp },
            personalDetails: {
                company: {
                    name: 'FakeCompany',
                    website: 'https://fakecompany.test',
                },
                contacts: [{ img: 'contact-image.png', label: 'FakeContact', url: 'mailto:contact@fake.test' }],
                jobTitle,
                location,
            },
            site: {
                siteMetadata: {
                    author: 'SEO Test author',
                    description: 'SEO Test description.',
                    title: 'SEO Test title',
                },
            },
            techs: { nodes: [{ img: 'tech-image.png', name: 'TechImage', website: 'https://image.tech' }] },
            techImgs: { nodes: [{ base: 'tech-image.png', childImageSharp }] },
        }));
    });

    describe('pages/404 Test Suite', () => {
        it('matches snapshot', () => {
            const jsx = <NotFoundPage />;
            expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
        });
    });

    describe('pages/about-me Test Suite', () => {
        it('matches snapshot', () => {
            const jsx = <AboutMePage />;
            expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
        });
    });

    describe('pages/index Test Suite', () => {
        it('matches snapshot', () => {
            const jsx = <IndexPage />;
            expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
        });
    });

    describe('pages/posts Test Suite', () => {
        it('matches snapshot', () => {
            const jsx = <PostsPage />;
            expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
        });
    });
});
