import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import FlexBox from '..';

describe('components/primitives/FlexBox Test Suite', () => {
  it('matches snapshot', () => {
    const jsx = <FlexBox>FlexBox Component</FlexBox>;
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
