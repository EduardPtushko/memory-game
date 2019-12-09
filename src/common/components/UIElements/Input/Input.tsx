import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface Props {
    label?: string;
    type?: string;
    placeholder?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    name: string;
    invalid: boolean;
    touched: boolean;
}

const Input = ({
    label,
    type = 'text',
    placeholder,
    onChange,
    value,
    name,
    invalid,
    touched
}: Props): JSX.Element => {
    return (
        <Div>
            <label>{label}</label>
            <InputElement
                invalid={!invalid && touched}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                name={name}
            />
        </Div>
    );
};

const Div = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    margin-bottom: 0.75em;
    font-family: Open Sans;

    label {
        margin-bottom: 0.15em;
        font-weight: 300;
    }
`;

export const InputElement = styled.input<{ invalid: boolean }>`
    border-radius: 2px;
    border: 1px solid white;
    padding: 0.5em;
    font-size: 1rem;
    outline: none;
    font-weight: 300;
    border-color: ${(props): string => (props.invalid ? 'red' : 'white')};

    &:focus {
        border-color: #ffc407;
    }
`;

export default Input;
