import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import List from '../../List';

describe('components/widgets/List Test Suite', () => {
    it('matches snapshot', () => {
        const jsx = (
            <List>
                <List.Label>List Label</List.Label>
                <List.Item>List Item 0</List.Item>
                <List.Item>List Item 1</List.Item>
            </List>
        );
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
});
