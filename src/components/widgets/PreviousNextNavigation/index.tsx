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
            {previous ? (
                <Link
                    backgroundColor="dark"
                    borderBottomLeftRadius={16}
                    borderBottomRightRadius={4}
                    borderTopLeftRadius={16}
                    borderTopRightRadius={4}
                    color="white"
                    fontSize={16}
                    fontWeight="semi-bold"
                    paddingBottom="3px"
                    paddingLeft={3}
                    paddingRight={2}
                    paddingTop="2px"
                    to={previous}
                >
                    {'Prev'}
                </Link>
            ) : (
                <Box />
            )}
            {next ? (
                <Link
                    backgroundColor="dark"
                    borderBottomLeftRadius={4}
                    borderBottomRightRadius={16}
                    borderTopLeftRadius={4}
                    borderTopRightRadius={16}
                    color="white"
                    fontSize={16}
                    fontWeight="semi-bold"
                    paddingBottom="3px"
                    paddingLeft={2}
                    paddingRight={3}
                    paddingTop="2px"
                    to={next}
                >
                    {'Next'}
                </Link>
            ) : (
                <Box />
            )}
        </Flex>
    );
};

PreviousNextNavigation.displayName = 'PreviousNextNavigation';

export { PreviousNextNavigationProps };
export default PreviousNextNavigation;
