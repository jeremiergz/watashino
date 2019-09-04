import React from 'react';
import theme from '../../../../theme';
import Flex, { FlexProps } from '../../../primitives/Flex';

type ItemProps = FlexProps;

const Item = ({ children, ...rest }: ItemProps) => {
    return (
        <Flex
            alignItems="center"
            as="li"
            fontSize={24}
            fontWeight={theme.fonts.main.weight.semiBold}
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

export { ItemProps };
export default Item;
