import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Text from '..';

describe('components/primitives/Text Test Suite', () => {
  it('matches snapshot', () => {
    const jsx = <Text>Text Component</Text>;
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
