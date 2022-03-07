import DownloadIcon from '@/components/svgs/misc/Download';
import PoIIcon from '@/components/svgs/misc/PoI';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

describe('@/components/svgs/misc Test Suite', () => {
  describe('Download Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <DownloadIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('PoI Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <PoIIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });
});
