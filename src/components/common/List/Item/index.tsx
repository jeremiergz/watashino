import React from 'react';
import Flex, { FlexProps } from '../../../primitives/Flex';

type ItemProps = FlexProps;

const Item = ({ children, ...rest }: ItemProps) => {
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

export { ItemProps };
export default Item;
