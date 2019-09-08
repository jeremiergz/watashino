import React, { ComponentType } from 'react';
import Box from '../../../primitives/Box';
import Flex from '../../../primitives/Flex';
import Link from '../../../widgets/Link';

type ItemProps = {
    link: {
        icon: ComponentType;
        name: string;
        to: string;
    };
};

const Item = ({ link, ...rest }: ItemProps) => {
    return (
        <Flex alignItems="center" flexDirection="column" justifyContent="center" minWidth={96} {...rest}>
            <Link alignItems="center" display="flex" flexDirection="column" to={link.to}>
                <Box as={link.icon} height={32} width={32} />
                {link.name}
            </Link>
        </Flex>
    );
};

Item.displayName = 'Item';

export { ItemProps };
export default Item;
