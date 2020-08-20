import ThemeProvider from 'components/providers/ThemeProvider';
import ThemeToggle from 'components/providers/ThemeProvider/ThemeToggle';
import * as Gatsby from 'gatsby';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ReactTestRenderer from 'react-test-renderer';
import NotFoundPage from '../404';
import AboutMePage from '../about-me';
import IndexPage from '../index';
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
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => ({
      mdData: {
        nodes: [{ frontmatter: { date: '2019-08-08', slug: '/posts/test', title: 'Test Post' } }],
      },
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
      appIcon: { childImageSharp },
      banner: { childImageSharp: { fixed: { src: 'fake.png' } } },
      companyImg: { childImageSharp },
      coverImg: { childImageSharp },
      dataJson: { jobTitle, location },
      file: { childImageSharp },
      gmapsImgs: { nodes: [{ theme: 'default', childFile: { childImageSharp } }] },
      pageData: { keywords: ['test', 'keyword'], name: 'Test Page' },
      personalDetails: {
        company: {
          name: 'FakeCompany',
          website: 'https://fakecompany.test',
        },
        contacts: [{ label: 'FakeContact', type: 'email', url: 'mailto:contact@fake.test' }],
        jobTitle,
        location,
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
      techs: { nodes: [{ img: 'tech-image.png', name: 'TechImage', website: 'https://image.tech' }] },
      techImgs: { nodes: [{ base: 'tech-image.png', childImageSharp }] },
    }));
    const navigate = jest.spyOn(Gatsby, 'navigate');
    navigate.mockImplementation(() => null);
  });

  describe('pages/404 Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = (
        <HelmetProvider>
          <ThemeProvider>
            <ThemeToggle />
            <NotFoundPage />
          </ThemeProvider>
        </HelmetProvider>
      );
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('pages/about-me Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = (
        <HelmetProvider>
          <ThemeProvider>
            <ThemeToggle />
            <AboutMePage />
          </ThemeProvider>
        </HelmetProvider>
      );
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('pages/index Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = (
        <HelmetProvider>
          <ThemeProvider>
            <ThemeToggle />
            <IndexPage />
          </ThemeProvider>
        </HelmetProvider>
      );
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('pages/posts Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = (
        <HelmetProvider>
          <ThemeProvider>
            <ThemeToggle />
            <PostsPage />
          </ThemeProvider>
        </HelmetProvider>
      );
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });
});
