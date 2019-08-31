import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Navigation from '..';

describe('components/Layout/Header/Navigation Test Suite', () => {
    it('matches snapshot', () => {
        const jsx = <Navigation />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
});
