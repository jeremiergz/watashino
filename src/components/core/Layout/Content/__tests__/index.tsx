import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { HelmetProvider } from 'react-helmet-async';
import Content from '../../Content';

describe('components/Layout/Content Test Suite', () => {
  beforeAll(() => {
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => ({
      banner: { childImageSharp: { resize: { src: 'fake.png' } } },
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
        <Content description="SEO Test description" keywords={['test']} lang="en" path="" title="SEO Test" type="post">
          Content Component
        </Content>
      </HelmetProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
