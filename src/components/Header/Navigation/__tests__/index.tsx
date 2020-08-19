import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from 'theme';
import Navigation from '../../Navigation';

describe('components/core/Layout/Header/Navigation Test Suite', () => {
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
      dataJson: { resumeLink: 'https://fake/resume-file.pdf' },
    }));
  });

  it('matches snapshot', () => {
    const jsx = (
      <ThemeProvider theme={DarkTheme}>
        <Navigation />
      </ThemeProvider>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
