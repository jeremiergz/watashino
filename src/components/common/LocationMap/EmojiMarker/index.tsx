import { Marker } from '@react-google-maps/api';
import React, { useState } from 'react';
const astonishedEmoji = require('../../../../images/emoji-astonished.png');
const smilingEmoji = require('../../../../images/emoji-smiling.png');
const uglyEmoji = require('../../../../images/emoji-ugly.png');

type EmojiMarkerProps = {
  onClick: () => void;
  position: {
    lat: number;
    lng: number;
  };
};

let timeout: number;

const EmojiMarker = ({ onClick, position }: EmojiMarkerProps) => {
  const [marker, setMarker] = useState(smilingEmoji);
  const handleMarkerClick = () => {
    if (typeof onClick === 'function') onClick();
    if (marker === smilingEmoji) {
      setMarker(astonishedEmoji);
    } else if (marker === astonishedEmoji) {
      setMarker(uglyEmoji);
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setMarker(smilingEmoji);
    }, 2500);
  };
  return (
    <Marker
      icon={{
        scaledSize: new google.maps.Size(32, 32),
        url: marker,
      }}
      onClick={handleMarkerClick}
      position={position}
    />
  );
};

EmojiMarker.displayName = 'EmojiMarker';

export default EmojiMarker;
