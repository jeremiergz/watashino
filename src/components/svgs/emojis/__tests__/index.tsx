import HappyIcon from '@/components/svgs/emojis/Happy';
import SadIcon from '@/components/svgs/emojis/Sad';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

describe('@/components/svgs/emojis Test Suite', () => {
  describe('Happy Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <HappyIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Sad Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <SadIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });
});
