import AstonishedIcon from 'components/svgs/emojis/Astonished';
import NerdIcon from 'components/svgs/emojis/Nerd';
import UglyIcon from 'components/svgs/emojis/Ugly';
import React, { useState } from 'react';

const Emojis = {
  Astonished: AstonishedIcon,
  Nerd: NerdIcon,
  Ugly: UglyIcon,
};

let timeout: number;

const EmojiMarker: React.FC<EmojiMarkerProps> = ({ onClick }) => {
  const [marker, setMarker] = useState(NerdIcon.displayName);
  const Emoji = Emojis[marker];
  const handleMarkerClick = () => {
    if (typeof onClick === 'function') onClick();
    if (marker === NerdIcon.displayName) {
      setMarker(AstonishedIcon.displayName);
    } else if (marker === AstonishedIcon.displayName) {
      setMarker(UglyIcon.displayName);
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setMarker(NerdIcon.displayName);
    }, 2500);
  };
  return <Emoji cursor="help" onClick={handleMarkerClick} />;
};

EmojiMarker.displayName = 'EmojiMarker';

export type EmojiMarkerProps = {
  onClick: () => void;
};
export default EmojiMarker;
