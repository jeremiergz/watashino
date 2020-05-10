import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import InstallPWA from '..';
import ThemingManager from '../../../core/ThemingManager';

describe('components/common/InstallPWA Test Suite', () => {
  beforeAll(() => {
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => ({
      appIcon: {
        childImageSharp: {
          fixed: {
            base64: 'data:image/png;base64',
            aspectRatio: 1,
            src: '',
            srcSet: '',
          },
        },
      },
    }));
  });

  it('matches snapshot', () => {
    const jsx = (
      <ThemingManager>
        <InstallPWA />
      </ThemingManager>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
