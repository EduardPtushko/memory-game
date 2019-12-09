import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface Props {
    getNumberColors: (num: number) => void;
    initialValue: number;
}

const NumberInput = ({ getNumberColors, initialValue }: Props): JSX.Element => {
    const [numberColors, setNumberColors] = React.useState(initialValue);

    return (
        <Input
            onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                getNumberColors(Number(e.target.value));
                setNumberColors(Number(e.target.value));
            }}
            id='boxes'
            type='number'
            value={numberColors}
            min={initialValue}
            max={40}
        />
    );
};

const Input = styled.input`
    display: inline-block;
    margin-right: 1rem;
    color: white;
    background-color: inherit;
    outline: none;
    border: none;
    font-size: 1rem;
    margin-left: 10px;
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
    width: 35px;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        cursor: pointer;
    }
`;

export default NumberInput;
