import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import PreviousNextNavigation from '..';

describe('components/widgets/PreviousNextNavigation Test Suite', () => {
    it('matches snapshot', () => {
        const jsx = (
            <PreviousNextNavigation next="/next" previous="/previous">
                PreviousNextNavigation Component
            </PreviousNextNavigation>
        );
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
});
