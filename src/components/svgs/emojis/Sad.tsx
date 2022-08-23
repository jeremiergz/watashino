import SVG, { SVGProps } from '@/components/common/SVG';

function Sad({ secondaryClassName, ...rest }: SadProps): JSX.Element {
  return (
    <SVG viewBox="0 0 72 72" {...rest}>
      <g id="line-supplement">
        <path
          d="m52 52.38c0.8775-1.631 1-5.38 1-7.38 0-4-4-11-4-11"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="m44 36s3 6.728 3 10c0 3.065-1 8-1 10"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="m20 52.4c-0.8775-1.631-1-5.4-1-7.4 0-4 4-11 4-11"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="m28 36s-3 6.728-3 10c0 3.065 1 8 1 10"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </g>
      <g id="color">
        <path
          d="m36.2 13.32c-12.57 0-22.8 10.23-22.8 22.8 0 12.57 10.23 22.8 22.8 22.8 12.57 0 22.8-10.23 22.8-22.8 0-12.57-10.23-22.8-22.8-22.8z"
          fill="#fcea2b"
        />
        <path
          d="m35.93 51.58c-2.461 0-4.742-2.368-4.742-4.987 0-2.619 2.444-4.66 4.905-4.66s4.701 2.205 4.701 4.823c-1e-6 2.619-2.403 4.823-4.864 4.823z"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="0.1"
        />
        <path d="m31.37 45.29c2.025 1.288 7.318 1.288 9.26 0l-4.63-4.005z" fill="#fff" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="m29.7 32.02c-5.762 9.541-3.86 14.27-3.696 23.98 0 1.803-5.146-2.412-6-4-2.17-5.92-0.3989-13.81 2.5-19.18 2.887-1.622 6.992-2.084 7.196-0.8031z"
          fill="#92d3f5"
        />
        <path
          d="m42.3 32.4c5.762 9.541 3.86 14.27 3.696 23.98 0 1.803 5.146-2.412 6-4 2.17-5.92 0.3989-13.81-2.5-19.18-2.887-1.622-6.992-2.084-7.196-0.8031z"
          fill="#92d3f5"
        />
      </g>
      <g id="hair" />
      <g id="skin" />
      <g id="skin-shadow" />
      <g id="line">
        <path
          d="m40.5 32.82c0.4132-0.344 2.246-1.792 4.909-1.636 2.161 0.1259 3.61 1.233 4.091 1.636"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="m22.5 32.82c0.4132-0.344 2.246-1.792 4.909-1.636 2.161 0.1259 3.61 1.233 4.091 1.636"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <circle cx="36" cy="36" r="23" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="2" />
        <circle
          cx="36"
          cy="46.6"
          fill="none"
          fillRule="evenodd"
          r="4.759"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </g>
    </SVG>
  );
}

export type SadProps = SVGProps;
export default Sad;
