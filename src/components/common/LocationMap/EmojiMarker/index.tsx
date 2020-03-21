import React, { useState } from 'react';
import EmojiAstonished from '../../../svg/EmojiAstonished';
import EmojiNerd from '../../../svg/EmojiNerd';
import EmojiUgly from '../../../svg/EmojiUgly';

type EmojiMarkerProps = {
  onClick: () => void;
};

const Emojis = {
  EmojiAstonished,
  EmojiNerd,
  EmojiUgly,
};

let timeout: number;

const EmojiMarker = ({ onClick }: EmojiMarkerProps) => {
  const [marker, setMarker] = useState(EmojiNerd.displayName);
  const handleMarkerClick = () => {
    if (typeof onClick === 'function') onClick();
    if (marker === EmojiNerd.displayName) {
      setMarker(EmojiAstonished.displayName);
    } else if (marker === EmojiAstonished.displayName) {
      setMarker(EmojiUgly.displayName);
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setMarker(EmojiNerd.displayName);
    }, 2500);
  };
  const Emoji = Emojis[marker];
  return <Emoji cursor="help" onClick={handleMarkerClick} />;
};

EmojiMarker.displayName = 'EmojiMarker';

export default EmojiMarker;
