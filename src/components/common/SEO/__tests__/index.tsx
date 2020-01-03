import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import SEO from '../../SEO';

describe('components/widgets/SEO Test Suite', () => {
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
    const jsx = <SEO description="SEO Test description" keywords={['test']} lang="en" title="SEO Test" />;
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });

  it('matches snapshot without optional props', () => {
    const jsx = <SEO title="SEO Test" />;
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
