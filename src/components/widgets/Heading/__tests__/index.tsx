import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Heading from '..';

describe('components/widgets/Heading Test Suite', () => {
    it('matches snapshot', () => {
        const jsx = <Heading as="h1">Heading Component</Heading>;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
});
