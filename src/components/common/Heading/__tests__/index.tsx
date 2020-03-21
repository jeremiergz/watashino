import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Heading from '../../Heading';

describe('components/common/Heading Test Suite', () => {
  it('matches snapshot', () => {
    const jsx = <Heading variant="h1">Heading Component</Heading>;
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
