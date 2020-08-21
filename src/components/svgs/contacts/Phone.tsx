import SVG, { SVGProps } from 'components/SVG';
import React from 'react';

const Phone: React.FC<PhoneProps> = props => {
  return (
    <SVG viewBox="0 0 512 512" {...props}>
      <circle cx="256" cy="256" r="224" fill="white" />
      <ellipse cx="256" cy="385.85175" rx="19.998854" ry="19.99872" />
      <path d="M311.79301 116.47659H200.20699c-6.25498 0-11.34429 4.85205-11.34429 10.8049v210.93035c0 5.95797 5.0859 10.80491 11.34429 10.80491h111.58602c6.25498 0 11.34429-4.85206 11.34429-10.80491V127.28149c-.003-5.95797-5.08931-10.8049-11.34429-10.8049z" />
      <path d="M255.99317 0C114.61367 0 0 114.62144 0 255.99488S114.61367 512 255.99317 512C397.37268 512 512 397.37515 512 255.99488S397.37268 0 255.99317 0zm99.59832 382.32917c0 19.55499-15.85504 35.41163-35.41186 35.41163H191.81354c-19.55511 0-35.41186-15.85493-35.41186-35.41163V128.55125c0-19.55498 15.85504-35.411623 35.41186-35.411623h128.36609c19.55511 0 35.41186 15.854933 35.41186 35.411623z" />
    </SVG>
  );
};

Phone.displayName = 'Phone';

export type PhoneProps = SVGProps;
export default Phone;
