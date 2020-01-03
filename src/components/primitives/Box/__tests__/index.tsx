import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Box from '..';

describe('components/primitives/Box Test Suite', () => {
  it('matches snapshot', () => {
    const jsx = <Box>Box Component</Box>;
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
