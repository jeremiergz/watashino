import React, { FunctionComponent } from 'react';
import Box from '../../primitives/Box';
import Flex, { FlexProps } from '../../primitives/Flex';
import Link from '../Link';

const PreviousNextNavigation: FunctionComponent<PreviousNextNavigationProps> = ({ next, previous, ...rest }) => {
  const shouldDisplay = !!previous || !!next;
  return (
    shouldDisplay && (
      <Flex justifyContent="space-between" {...rest}>
        {previous ? (
          <Link fontSize={16} fontWeight="semi-bold" to={previous} variant="underlined">
            {'Prev'}
          </Link>
        ) : (
          <Box />
        )}
        {next ? (
          <Link fontSize={16} fontWeight="semi-bold" to={next} variant="underlined">
            {'Next'}
          </Link>
        ) : (
          <Box />
        )}
      </Flex>
    )
  );
};

PreviousNextNavigation.displayName = 'PreviousNextNavigation';

export type PreviousNextNavigationProps = FlexProps & {
  next: string;
  previous: string;
};
export default PreviousNextNavigation;
