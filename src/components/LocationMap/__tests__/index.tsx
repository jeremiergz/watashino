import * as ReactGoogleMapsAPI from '@react-google-maps/api';
import * as Gatsby from 'gatsby';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import LocationMap from '..';

describe('components/LocationMap Test Suite', () => {
    beforeAll(() => {
        const useLoadScript = jest.spyOn(ReactGoogleMapsAPI, 'useLoadScript');
        useLoadScript.mockImplementation(() => ({
            isLoaded: true,
            loadError: null,
            url: '',
        }));
        const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
        useStaticQuery.mockImplementation(() => ({
            dataJson: {
                location: {
                    country: 'USA',
                    city: 'San Francisco',
                    lat: 37.77493,
                    lng: -122.41942,
                },
            },
        }));
    });

    it('matches snapshot', () => {
        const jsx = <LocationMap />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });

    it('matches snapshot when not loaded', () => {
        const jsx = <LocationMap />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
});
