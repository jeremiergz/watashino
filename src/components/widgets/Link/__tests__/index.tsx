import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Link from '..';

describe('components/widgets/Link Test Suite', () => {
    it('matches snapshot', () => {
        const jsx = (
            <Link to="/test-page" variant="underlined">
                Link Component
            </Link>
        );
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
});
