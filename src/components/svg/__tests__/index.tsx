import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import BookIcon from '../Book';
import BusinessIcon from '../Business';
import DownloadIcon from '../Download';
import HouseIcon from '../House';
import MoodIcon from '../Mood';
import PersonIcon from '../Person';

describe('src/components/svg Test Suite', () => {
    describe('Book Test Suite', () => {
        it('matches snapshot', () => {
            const jsx = <BookIcon />;
            expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
        });
    });

    describe('Business Test Suite', () => {
        it('matches snapshot', () => {
            const jsx = <BusinessIcon />;
            expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
        });
    });

    describe('Download Test Suite', () => {
        it('matches snapshot', () => {
            const jsx = <DownloadIcon />;
            expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
        });
    });

    describe('House Test Suite', () => {
        it('matches snapshot', () => {
            const jsx = <HouseIcon />;
            expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
        });
    });

    describe('Mood Test Suite', () => {
        it('matches snapshot', () => {
            const jsx = <MoodIcon />;
            expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
        });
    });

    describe('Person Test Suite', () => {
        it('matches snapshot', () => {
            const jsx = <PersonIcon />;
            expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
        });
    });
});
