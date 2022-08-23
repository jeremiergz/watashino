import SVG, { SVGProps } from '@/components/common/SVG';

// From https://github.com/catamphetamine/country-flag-icons/blob/master/flags/3x2/FR.svg

function France({ secondaryClassName, ...rest }: FranceProps): JSX.Element {
  return (
    <SVG viewBox="0 85.333 512 341.333" {...rest}>
      <rect fill="#FFFFFF" height="341.337" width="512" y="85.331" />
      <rect fill="#0052B4" height="341.337" width="170.663" y="85.331" />
      <rect fill="#D80027" height="341.337" width="170.663" x="341.337" y="85.331" />
    </SVG>
  );
}

export type FranceProps = SVGProps;
export default France;
