import React from 'react';
import ColorList from '../ColorList/ColorList';
import styled from 'styled-components';
import { Wrapper } from '../../utilities';
import { ColorElement } from '../../types';

interface Props {
    colors: ColorElement[];
    clicked: (id: number) => void;
}

const ColorLists = ({ colors, clicked }: Props): JSX.Element => (
    <Wrapper>
        <Ul>
            {colors.map((color: ColorElement, i: number) => (
                <ColorList key={i} color={color} clicked={clicked} />
            ))}
        </Ul>
    </Wrapper>
);

const Ul = styled.ul`
    margin: 3rem auto 3rem;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, auto));
    justify-content: center;
    grid-gap: 0.5rem;
`;

export default ColorLists;
