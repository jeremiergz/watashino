import React, { HTMLAttributes } from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { color, ColorProps, compose, layout, LayoutProps } from 'styled-system';

type SvgProps = StyledComponentProps<
  'svg',
  any,
  ColorProps &
    LayoutProps &
    HTMLAttributes<SVGSVGElement> & { as?: keyof JSX.IntrinsicElements | React.ComponentType<any> },
  never
>;

const SvgBase = styled.svg<SvgProps>`
  ${compose(color, layout)}
`;

const Svg = (props: SvgProps) => {
  return <SvgBase height={32} viewBox="0 0 24 24" width={32} xmlns="http://www.w3.org/2000/svg" {...props} />;
};

Svg.displayName = 'Svg';

export { SvgProps };
export default Svg;
