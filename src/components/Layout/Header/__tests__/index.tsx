import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Header from '..';

describe('components/Layout/Header Test Suite', () => {
    beforeAll(() => {
        const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
        useStaticQuery.mockImplementation(() => ({
            dataJson: {
                jobTitle: 'Full Stack Engineer',
            },
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
        }));
    });

    it('matches snapshot', () => {
        const jsx = <Header />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
});
