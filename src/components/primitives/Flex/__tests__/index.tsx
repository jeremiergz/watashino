import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Flex from '..';

describe('components/primitives/Flex Test Suite', () => {
    it('matches snapshot', () => {
        const jsx = <Flex>Flex Component</Flex>;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
});
