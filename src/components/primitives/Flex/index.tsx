import styled from 'styled-components';
import Box, { BoxProps } from '../Box';

type FlexProps = BoxProps;

const Flex = styled(Box)<FlexProps>`
    display: flex;
`;

export { FlexProps };
export default Flex;
