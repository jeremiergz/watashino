import React, { ComponentType, FunctionComponent, HTMLAttributes } from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { color, ColorProps, compose, layout, LayoutProps } from 'styled-system';

const SvgBase = styled.svg<SvgProps>`
  ${compose(color, layout)}
`;

const Svg: FunctionComponent<SvgProps> = props => {
  return <SvgBase height={32} viewBox="0 0 24 24" width={32} xmlns="http://www.w3.org/2000/svg" {...props} />;
};

Svg.displayName = 'Svg';

export type SvgProps = StyledComponentProps<
  'svg',
  any,
  ColorProps & LayoutProps & HTMLAttributes<SVGSVGElement> & { as?: keyof JSX.IntrinsicElements | ComponentType<any> },
  never
>;
export default Svg;
