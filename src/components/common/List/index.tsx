import React, { FunctionComponent } from 'react';
import Box, { BoxProps } from '../../primitives/Box';
import Item from './Item';
import Label from './Label';

const List: FunctionComponent<ListProps> & { Item: typeof Item; Label: typeof Label } = ({ children, ...rest }) => {
  return (
    <Box as="ul" listStyle="none" margin={0} padding={0} {...rest}>
      {children}
    </Box>
  );
};

List.displayName = 'List';
List.Item = Item;
List.Label = Label;

export type ListProps = BoxProps;
export default List;
