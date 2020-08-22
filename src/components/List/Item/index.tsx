import FlexBox, { FlexBoxProps } from 'components/primitives/FlexBox';
import React from 'react';

const Item: React.FC<ItemProps> = ({ children, ...rest }) => {
  return (
    <FlexBox
      alignItems="center"
      as="li"
      fontSize={24}
      fontWeight="semiBold"
      justifyContent="left"
      paddingX={0}
      paddingY={2}
      textAlign="left"
      {...rest}
    >
      {children}
    </FlexBox>
  );
};

Item.displayName = 'ListItem';

export type ItemProps = FlexBoxProps;
export default Item;
