import React, { FunctionComponent } from 'react';
import Flex, { FlexProps } from '../../../primitives/Flex';

const Item: FunctionComponent<ItemProps> = ({ children, ...rest }) => {
  return (
    <Flex
      alignItems="center"
      as="li"
      fontSize={24}
      fontWeight="semi-bold"
      justifyContent="left"
      paddingX={0}
      paddingY={2}
      textAlign="left"
      {...rest}
    >
      {children}
    </Flex>
  );
};

Item.displayName = 'ListItem';

export type ItemProps = FlexProps;
export default Item;
