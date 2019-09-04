import React from 'react';
import styled from 'styled-components';
import BaseBox, { BoxProps } from '../../primitives/Box';
import Item from './Item';
import Label from './Label';

type ListProps = BoxProps;

const Box = styled(BaseBox)`
    list-style: none;
`;

const List = ({ children, ...rest }: ListProps) => {
    return (
        <Box as="ul" margin={0} padding={0} {...rest}>
            {children}
        </Box>
    );
};

List.Label = Label;
List.Item = Item;

export { ListProps };
export default List;
