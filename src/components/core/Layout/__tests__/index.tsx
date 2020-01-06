import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Layout from '..';
import ThemingManager from '../../ThemingManager';

describe('components/Layout Test Suite', () => {
  beforeAll(() => {
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => ({
      allMarkdownRemark: {
        totalCount: 1,
      },
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
      site: {
        siteMetadata: {
          author: 'SEO Test author',
          description: 'SEO Test description.',
          license: 'Test-Licence',
          repository: { url: 'git+https://test-repository.git' },
          title: 'SEO Test title',
          version: '3.16.120',
        },
      },
    }));
  });

  it('matches snapshot', () => {
    const jsx = (
      <ThemingManager>
        <Layout>Layout Component</Layout>
      </ThemingManager>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
