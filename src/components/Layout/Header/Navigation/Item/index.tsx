import React, { ComponentType } from 'react';
import styled from 'styled-components';
import BaseLink from '../../../../widgets/Link';

type Props = {
    link: {
        icon: ComponentType;
        name: string;
        to: string;
    };
};

const Item = styled.div`
    min-width: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Link = styled(BaseLink)`
    text-align: center;
`;

const Svg = styled.svg`
    height: 32px;
    width: 32px;
`;

const ItemComponent = ({ link, ...rest }: Props) => {
    return (
        <Item {...rest}>
            <Link to={link.to}>
                <Svg as={link.icon} />
                <div>{link.name}</div>
            </Link>
        </Item>
    );
};

ItemComponent.displayName = 'Item';

export default ItemComponent;
