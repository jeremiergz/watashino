import React from 'react';
import Box from '../../primitives/Box';
import Flex, { FlexProps } from '../../primitives/Flex';
import Link from '../Link';

type PreviousNextNavigationProps = FlexProps & {
    next: string;
    previous: string;
};

const PreviousNextNavigation = ({ next, previous, ...rest }: PreviousNextNavigationProps) => {
    return (
        <Flex justifyContent="space-between" {...rest}>
            {previous ? <Link to={previous}>{'◂ Prev'}</Link> : <Box />}
            {next ? <Link to={next}>{'Next ▸'}</Link> : <Box />}
        </Flex>
    );
};

PreviousNextNavigation.displayName = 'PreviousNextNavigation';

export { PreviousNextNavigationProps };
export default PreviousNextNavigation;
