import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Box from '../primitives/Box';

const LocationMap = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
        preventGoogleFontsLoading: true,
    });
    const {
        dataJson: { location },
    } = useStaticQuery<GraphQL.LocationMapDataQuery>(graphql`
        query LocationMapData {
            dataJson {
                location {
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
            <Box height={416} width="100%">
                <GoogleMap
                    center={position}
                    mapContainerStyle={{ height: '100%', width: '100%', borderRadius: '8px' }}
                    zoom={4}
                >
                    <Marker position={position} />
                </GoogleMap>
            </Box>
        )
    );
};

LocationMap.displayName = 'LocationMap';

export default LocationMap;
