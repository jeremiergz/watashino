import CanadaIcon from '@/components/svgs/flags/Canada';
import FranceIcon from '@/components/svgs/flags/France';
import USAIcon from '@/components/svgs/flags/USA';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

describe('@/components/svgs/flags Test Suite', () => {
  describe('Canada Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <CanadaIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('France Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <FranceIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('USA Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <USAIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });
});
