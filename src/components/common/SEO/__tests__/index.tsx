import * as Gatsby from 'gatsby';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ReactTestRenderer from 'react-test-renderer';
import SEO from '../../SEO';

describe('components/common/SEO Test Suite', () => {
  beforeAll(() => {
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => ({
      banner: { childImageSharp: { fixed: { src: 'fake.png' } } },
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
      <HelmetProvider>
        <SEO description="SEO Test description" keywords={['test']} lang="en" title="SEO Test" />
      </HelmetProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });

  it('matches snapshot without optional props', () => {
    const jsx = (
      <HelmetProvider>
        <SEO title="SEO Test" />
      </HelmetProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
