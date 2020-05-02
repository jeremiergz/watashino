import Img, { GatsbyImageProps } from 'gatsby-image';
import styled from 'styled-components';
import { compose, layout, LayoutProps, space, SpaceProps } from 'styled-system';

const Image = styled(Img)<ImageProps>`
  ${compose(layout, space)}
`;

Image.displayName = 'Image';

export type ImageProps = GatsbyImageProps & LayoutProps & SpaceProps;
export default Image;
