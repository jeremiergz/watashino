import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Box from '../../primitives/Box';
import { useTheming } from '../ThemingManager';

const LocationMap = () => {
  const { theme } = useTheming();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
    preventGoogleFontsLoading: true,
  });
  const {
    dataJson: { location },
    gmapsJson: { styles },
  } = useStaticQuery<GraphQL.LocationMapDataQuery>(graphql`
    query LocationMapData {
      dataJson {
        location {
          lat
          lng
        }
      }
      gmapsJson {
        styles {
          dark {
            elementType
            featureType
            stylers {
              color
            }
          }
          light {
            elementType
            featureType
            stylers {
              color
            }
          }
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
          options={{
            styles: [
              ...styles[theme.type],
              {
                elementType: 'geometry',
                featureType: 'water',
                stylers: [{ color: theme.type === 'light' ? theme.colors.primary : theme.colors.secondary }],
              },
            ],
          }}
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
