import * as ReactGoogleMapsAPI from '@react-google-maps/api';
import * as Gatsby from 'gatsby';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ReactTestRenderer from 'react-test-renderer';
import ThemingManager from '../../components/core/ThemingManager';
import ThemeToggle from '../../components/core/ThemingManager/ThemeToggle';
import NotFoundPage from '../404';
import AboutMePage from '../about-me';
import IndexPage from '../index';
import PostsPage from '../posts';
import SkillsPage from '../skills';

jest.mock('../../components/core/LocationMap');

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
      allSkillsJson: {
        nodes: [
          {
            name: 'Skills Section 0',
            sortOrder: 0,
            items: [
              { name: 'Skill 0', proficiencyLevel: 4, sortOrder: 0 },
              { name: 'Skill 1', proficiencyLevel: 6, sortOrder: 1 },
            ],
          },
          {
            name: 'Skills Section 1',
            sortOrder: 1,
            items: [{ name: 'Skill 0', proficiencyLevel: 5, sortOrder: 0 }],
          },
        ],
      },
      banner: { childImageSharp: { resize: { src: 'fake.png' } } },
      companyImg: { childImageSharp },
      contactImgs: { nodes: [{ base: 'contact-image.png', childImageSharp }] },
      coverImg: { childImageSharp },
      dataJson: { jobTitle, location },
      file: { childImageSharp },
      gmapsJson: {
        styles: { dark: [], light: [] },
      },
      pageData: { keywords: ['test', 'keyword'], name: 'Test Page' },
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
    navigate.mockImplementation(x => null);
  });

  describe('pages/404 Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = (
        <HelmetProvider>
          <ThemingManager>
            <ThemeToggle />
            <NotFoundPage />
          </ThemingManager>
        </HelmetProvider>
      );
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('pages/about-me Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = (
        <HelmetProvider>
          <ThemingManager>
            <ThemeToggle />
            <AboutMePage />
          </ThemingManager>
        </HelmetProvider>
      );
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('pages/index Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = (
        <HelmetProvider>
          <ThemingManager>
            <ThemeToggle />
            <IndexPage />
          </ThemingManager>
        </HelmetProvider>
      );
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('pages/posts Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = (
        <HelmetProvider>
          <ThemingManager>
            <ThemeToggle />
            <PostsPage />
          </ThemingManager>
        </HelmetProvider>
      );
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('pages/skills Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = (
        <HelmetProvider>
          <ThemingManager>
            <ThemeToggle />
            <SkillsPage />
          </ThemingManager>
        </HelmetProvider>
      );
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });
});
