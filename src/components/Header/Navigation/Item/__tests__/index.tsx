import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import BusinessIcon from '../../../../svg/Business';
import Item from '../../Item';

describe('components/Layout/Header/Navigation/Item Test Suite', () => {
    it('matches snapshot', () => {
        const jsx = <Item link={{ icon: BusinessIcon, name: 'Test Link', to: '/test-page' }} />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
});
