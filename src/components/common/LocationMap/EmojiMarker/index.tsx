import React, { FunctionComponent, useState } from 'react';
import EmojiAstonished from '../../../svg/EmojiAstonished';
import EmojiNerd from '../../../svg/EmojiNerd';
import EmojiUgly from '../../../svg/EmojiUgly';

const Emojis = {
  EmojiAstonished,
  EmojiNerd,
  EmojiUgly,
};

let timeout: number;

const EmojiMarker: FunctionComponent<EmojiMarkerProps> = ({ onClick }) => {
  const [marker, setMarker] = useState(EmojiNerd.displayName);
  const Emoji = Emojis[marker];
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
  return <Emoji cursor="help" onClick={handleMarkerClick} />;
};

EmojiMarker.displayName = 'EmojiMarker';

export type EmojiMarkerProps = {
  onClick: () => void;
};
export default EmojiMarker;
