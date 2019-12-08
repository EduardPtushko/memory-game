import React from 'react';
import styled from 'styled-components';
import { ColorElement } from '../../../types';

interface Props {
    color: ColorElement;
    clicked: (id: number) => void;
}

const ColorList = ({ color, clicked }: Props): JSX.Element => {
    return (
        <List
            color={color.open ? color.bcgColor : 'transparent'}
            onClick={(): void => clicked(color.id)}
        ></List>
    );
};

const List = styled.li`
    display: inline-block;
    list-style: none;
    min-width: 100px;
    min-height: 100px;
    border: 1px solid white;
    border-radius: 5px;
    background-color: ${(props): string | undefined => props.color};
`;

export default ColorList;
