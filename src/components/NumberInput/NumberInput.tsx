import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface Props {
    getNumberColors: (num: number) => void;
    className?: string;
    initialValue: number;
}

const ColorsInput = ({
    getNumberColors,
    className,
    initialValue
}: Props): JSX.Element => {
    const [numberColors, setNumberColors] = React.useState(initialValue);

    return (
        <label htmlFor='boxes' className={className}>
            <input
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
        </label>
    );
};

const StyledColorsInput = styled(ColorsInput)`
    line-height: 2;

    input {
        display: inline-block;
        margin-right: 1rem;
        color: white;
        background-color: inherit;
        outline: none;
        border: none;
        font-size: 1rem;
        margin-left: 10px;
        width: 35px;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            cursor: pointer;
        }
    }
`;

export default StyledColorsInput;
