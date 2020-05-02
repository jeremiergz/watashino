import React, { FunctionComponent } from 'react';
import Svg, { SvgProps } from '../../common/Svg';

const Sun: FunctionComponent<SunProps> = props => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <path
        d="M507.834 301.608l-54.769-48.312 52.832-50.399a7.46 7.46 0 002.099-7.189 7.505 7.505 0 00-5.211-5.401l-70.316-20.292 25.988-68.056a7.454 7.454 0 00-1.204-7.389 7.55 7.55 0 00-7.038-2.657l-72.274 11.652-5.878-72.561a7.485 7.485 0 00-4.275-6.161 7.569 7.569 0 00-7.504.601l-60.266 41.342-36.609-63.044A7.536 7.536 0 00256.889 0a7.534 7.534 0 00-6.519 3.742L208.347 76.11l-72.69-41.953a7.566 7.566 0 00-7.528-.018 7.477 7.477 0 00-3.78 6.473l-.176 72.795-72.965-6.014a7.55 7.55 0 00-6.807 3.194 7.444 7.444 0 00-.622 7.459l31.242 65.835-68.513 25.681a7.499 7.499 0 00-4.773 5.789 7.456 7.456 0 002.656 7.003l56.619 46.152-50.813 52.41a7.457 7.457 0 00-1.816 7.264 7.508 7.508 0 005.419 5.194l71.055 17.551-23.295 69.011a7.453 7.453 0 001.494 7.336 7.554 7.554 0 007.137 2.382l71.76-14.443 8.721 72.278a7.488 7.488 0 004.513 5.99 7.565 7.565 0 007.475-.891l58.596-43.647 39.055 59.566a7.538 7.538 0 006.662 3.486 7.533 7.533 0 006.368-3.992l34.107-62.405 61.839 38.974a7.566 7.566 0 007.522.31 7.482 7.482 0 004.03-6.322l3.031-72.734 72.674 8.84a7.555 7.555 0 006.928-2.927 7.45 7.45 0 00.914-7.43L435.75 337.31l69.465-23.003a7.502 7.502 0 004.997-5.599 7.46 7.46 0 00-2.378-7.1z"
        fill="#FFA600"
      ></path>
      <ellipse cx="254.35" cy="254.691" fill="#FFDB2D" rx="155.069" ry="154.949"></ellipse>
      <path
        d="M254.354 99.743c-3.884 0-7.732.147-11.543.428 80.25 5.901 143.525 72.825 143.525 154.521 0 81.695-63.275 148.619-143.525 154.521 3.811.28 7.66.428 11.543.428 85.641 0 155.068-69.373 155.068-154.948 0-85.577-69.427-154.95-155.068-154.95z"
        fill="#FFCA00"
      ></path>
    </Svg>
  );
};

Sun.displayName = 'Sun';

export type SunProps = SvgProps;
export default Sun;
