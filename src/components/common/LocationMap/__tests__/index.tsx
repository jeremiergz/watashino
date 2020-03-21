import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ThemingManager from '../../../core/ThemingManager';
import LocationMap from '../../LocationMap';

describe('components/common/LocationMap Test Suite', () => {
  beforeAll(() => {
    const childImageSharp = {
      fixed: {
        aspectRatio: 1,
        base64: 'data:image/png;base64',
        src: '/static/89ee547c5db6cbf9b37a682e8b3f3f57/8b091/profile-pic.png',
        srcSet:
          '/static/89ee547c5db6cbf9b37a682e8b3f3f57/8b091/profile-pic.png 1x,\n/static/89ee547c5db6cbf9b37a682e8b3f3f57/1e576/profile-pic.png 1.5x,\n/static/89ee547c5db6cbf9b37a682e8b3f3f57/6cb10/profile-pic.png 2x',
      },
    };
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => ({
      gmapsImgs: { nodes: [{ mapURL: 'https://fake.com', theme: 'default', childFile: { childImageSharp } }] },
    }));
  });

  it('matches snapshot', () => {
    const jsx = (
      <ThemingManager>
        <LocationMap />
      </ThemingManager>
    );
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
