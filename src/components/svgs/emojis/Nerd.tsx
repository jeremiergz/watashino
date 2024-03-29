import SVG, { SVGProps } from '@/components/common/SVG';

function Nerd({ secondaryClassName, ...rest }: NerdProps): JSX.Element {
  return (
    <SVG viewBox="0 0 72 72" {...rest}>
      <g id="color">
        <circle cx="36" cy="36" fill="#fcea2b" r="23" />
        <path d="M32.1434,47.3742c-0.282,1.7234-0.4344,5.4883,3.8566,4.64v-4.3697" fill="#ffffff" />
        <path d="M39.8566,47.3742c0.282,1.7234,0.4344,5.4883-3.8566,4.64v-4.3697" fill="#ffffff" />
      </g>
      <g id="hair" />
      <g id="skin" />
      <g id="skin-shadow" />
      <g id="line">
        <circle
          cx="36"
          cy="36"
          fill="none"
          r="23"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M19.074,30.4073c0,0-0.953,8.5508,6.8608,7.9185c2.6197-0.212,7.8164-0.6507,7.867-8.3427 c0.0046-0.6979-0.0078-1.5989-0.8108-2.6298c-1.0647-1.3669-3.5716-1.9711-9.9446-1.422 C23.0465,25.9314,19.6002,25.8323,19.074,30.4073z"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <polyline
          fill="none"
          points="19.1447,29.8742 18.7117,26.5029 22.5446,25.9752"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M52.9325,30.4073c0,0,0.953,8.5508-6.8608,7.9185c-2.6197-0.212-7.8164-0.6507-7.867-8.3427 c-0.0046-0.6979,0.0078-1.5989,0.8108-2.6298c1.0647-1.3669,3.5716-1.9711,9.9446-1.422 C48.9601,25.9314,52.4064,25.8323,52.9325,30.4073z"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M31.6962,26.3593c0,0,4.1241,2.5339,8.6569,0"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M33.8022,31.2614c0,0,2.1275-3.7509,4.383,0"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <polyline
          fill="none"
          points="52.8552,29.8767 53.2883,26.5054 49.4554,25.9777"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M34.1463,29.9706c0,0,1.7954-3.7509,3.6988,0"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M32.1434,47.3742 c-0.282,1.7234-0.4344,5.4883,3.8566,4.64v-4.3697"
          fill="none"
          stroke="#000000"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path d="M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31" />
        <path d="M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31" />
        <path
          d="M39.8566,47.3742 c0.282,1.7234,0.4344,5.4883-3.8566,4.64v-4.3697"
          fill="none"
          stroke="#000000"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M45.8148,44.8055c-6.574,3.5248-14.0454,3.6576-19.6295,0"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </g>
    </SVG>
  );
}

export type NerdProps = SVGProps;
export default Nerd;
