import Link from 'components/Link';
import Box from 'components/primitives/Box';
import FlexBox, { FlexBoxProps } from 'components/primitives/FlexBox';
import React from 'react';

const PreviousNextNavigation: React.FC<PreviousNextNavigationProps> = ({ next, previous, ...rest }) => {
  const shouldDisplay = !!previous || !!next;
  return (
    shouldDisplay && (
      <FlexBox justifyContent="space-between" {...rest}>
        {previous ? (
          <Link aria-label="Previous article" fontSize={16} fontWeight="semiBold" to={previous} variant="underlined">
            {'Prev'}
          </Link>
        ) : (
          <Box />
        )}
        {next ? (
          <Link aria-label="Next article" fontSize={16} fontWeight="semiBold" to={next} variant="underlined">
            {'Next'}
          </Link>
        ) : (
          <Box />
        )}
      </FlexBox>
    )
  );
};

PreviousNextNavigation.displayName = 'PreviousNextNavigation';

export type PreviousNextNavigationProps = FlexBoxProps & {
  next: string;
  previous: string;
};
export default PreviousNextNavigation;
