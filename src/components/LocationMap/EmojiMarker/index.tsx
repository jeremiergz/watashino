import EmojiAstonishedIcon from 'components/svg/EmojiAstonished';
import EmojiNerdIcon from 'components/svg/EmojiNerd';
import EmojiUglyIcon from 'components/svg/EmojiUgly';
import React, { useState } from 'react';

const Emojis = {
  EmojiAstonished: EmojiAstonishedIcon,
  EmojiNerd: EmojiNerdIcon,
  EmojiUgly: EmojiUglyIcon,
};

let timeout: number;

const EmojiMarker: React.FC<EmojiMarkerProps> = ({ onClick }) => {
  const [marker, setMarker] = useState(EmojiNerdIcon.displayName);
  const Emoji = Emojis[marker];
  const handleMarkerClick = () => {
    if (typeof onClick === 'function') onClick();
    if (marker === EmojiNerdIcon.displayName) {
      setMarker(EmojiAstonishedIcon.displayName);
    } else if (marker === EmojiAstonishedIcon.displayName) {
      setMarker(EmojiUglyIcon.displayName);
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setMarker(EmojiNerdIcon.displayName);
    }, 2500);
  };
  return <Emoji cursor="help" onClick={handleMarkerClick} />;
};

EmojiMarker.displayName = 'EmojiMarker';

export type EmojiMarkerProps = {
  onClick: () => void;
};
export default EmojiMarker;
