import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Paragraph from '../../Paragraph';

describe('components/common/Paragraph Test Suite', () => {
  it('matches snapshot', () => {
    const jsx = <Paragraph>Paragraph Component</Paragraph>;
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
});
