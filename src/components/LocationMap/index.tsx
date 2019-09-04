import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const LocationMap = styled.div`
    height: 416px;
    width: 100%;
`;

const LocationMapComponent = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
        preventGoogleFontsLoading: true,
    });
    const {
        dataJson: { location },
    } = useStaticQuery<GraphQL.LocationMapDataQueryQuery>(graphql`
        query LocationMapDataQuery {
            dataJson {
                location {
                    country
                    city
                    lat
                    lng
                }
            }
        }
    `);
    const position = {
        lat: location.lat,
        lng: location.lng,
    };
    return (
        isLoaded && (
            <LocationMap>
                <GoogleMap
                    center={position}
                    mapContainerStyle={{ height: '100%', width: '100%', borderRadius: '8px' }}
                    zoom={4}
                >
                    <Marker position={position} />
                </GoogleMap>
            </LocationMap>
        )
    );
};

LocationMapComponent.displayName = 'LocationMap';

export default LocationMapComponent;
