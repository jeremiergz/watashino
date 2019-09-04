import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Paragraph from '..';

describe('components/widgets/Paragraph Test Suite', () => {
    it('matches snapshot', () => {
        const jsx = <Paragraph>Paragraph Component</Paragraph>;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
});
