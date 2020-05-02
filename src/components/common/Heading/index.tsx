import styled from 'styled-components';
import { variant } from 'styled-system';
import Text, { TextProps } from '../../primitives/Text';

const Heading = styled(Text)<HeadingProps>`
  display: inline-block;
  ${variant({
    variants: {
      h1: { fontSize: 44, fontWeight: 'bold' },
      h2: { fontSize: 32 },
      h3: { fontSize: 24 },
      h4: { fontSize: 20 },
    },
  })}
`;

Heading.displayName = 'Heading';

export type HeadingProps = TextProps & {
  variant: 'h1' | 'h2' | 'h3' | 'h4';
};
export default Heading;
