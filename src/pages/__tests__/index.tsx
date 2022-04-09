import ErrorBoundary from '@/components/common/ErrorBoundary';
import SEO from '@/components/common/SEO';
import NotFoundPage from '@/pages/404';
import IndexPage from '@/pages/index';
import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

const navigate = jest.spyOn(Gatsby, 'navigate');
navigate.mockImplementation(() => null);

describe('@/pages Test Suite', () => {
  beforeAll(() => {
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => ({
      information: {
        contacts: [{ type: 'email', url: 'mailto:test@fake.com' }],
        dateOfBirth: '2000-01-01',
        geolocation: {
          city: 'Montreal',
          country: 'Canada',
          countryCode: 'CAN',
          lat: 45.5579564,
          lng: -73.8703852,
          website: 'https://www.mtl.org',
        },
        jobTitle: 'Fake Job',
        nationality: 'Canadian',
        openToGigs: false,
        resumeUrl: 'https://fake.com',
      },
      site: {
        siteMetadata: {
          authorName: 'Test author',
          authorTwitterUsername: 'testAuthor',
          color: '#fffff',
          description: 'Test description.',
          keywords: ['fake', 'test'],
          license: 'MIT',
          name: 'Test Name',
          repositoryUrl: 'https://fake-repository.com',
          siteUrl: 'http://localhost:8000',
          title: 'Test title',
          version: '99.01.0',
        },
      },
      staticGmapsImage: {
        childFile: {
          childImageSharp: {
            gatsbyImageData: {
              layout: 'fixed',
              placeholder: {
                fallback: 'data:image/png;base64,fake',
              },
              images: {
                fallback: {
                  src: '/static/fake.png',
                  srcSet: '/static/fake.png 1115w',
                  sizes: '1114.8387096774195px',
                },
                sources: [
                  {
                    srcSet: '/static/fake.avif 1115w',
                    type: 'image/avif',
                    sizes: '1114.8387096774195px',
                  },
                  {
                    srcSet: '/static/fake.webp 1115w',
                    type: 'image/webp',
                    sizes: '1114.8387096774195px',
                  },
                ],
              },
              width: 1152,
              height: 1240,
            },
          },
        },
        mapURL: 'https://www.google.com/maps/@?api=1&map_action=map&center=45.5579564,-73.8703852&zoom=10',
      },
    }));
  });

  describe('NotFoundPage Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = (
        <ErrorBoundary>
          <SEO />
          {/* @ts-ignore */}
          <NotFoundPage navigate={navigate} />
        </ErrorBoundary>
      );
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('IndexPage Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = (
        <ErrorBoundary>
          <SEO />
          {/* @ts-ignore */}
          <IndexPage />
        </ErrorBoundary>
      );
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });
});
