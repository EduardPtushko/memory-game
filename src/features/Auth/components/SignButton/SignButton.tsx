import React from 'react';
import styled, { keyframes } from 'styled-components';
import { gray } from '../../../../common/utilities';
import { darken } from 'polished';
const loader = require('../../../../assets/images/loader.png');

interface Props {
    loading: boolean;
    isSignup: boolean;
}

const SignButton = ({ loading, isSignup }: Props): JSX.Element => {
    return (
        <Button loading={loading.toString()}>
            {isSignup ? 'Sign up' : 'Log in'}
        </Button>
    );
};

const rotate = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Button = styled.button<{ loading: string }>`
    position: relative;
    margin-top: 1rem;
    width: 100%;
    border-color: transparent;
    border-radius: 2px;
    font-size: 0.8rem;
    color: ${({ loading }): string =>
        loading === 'true' ? 'transparent' : 'white'};
    background-color: ${gray};
    background-image: ${({ loading }): string =>
        loading === 'true' ? `radial-gradient(white, ${gray})` : 'none'};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0.65rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s ease-out;

    &:hover {
        background-color: ${darken(0.05, gray)};
    }

    &::after {
        content: ${({ loading }): string =>
            loading === 'true' ? `url(${loader})` : 'none'};
        position: absolute;
        top: -6px;
        left: 90px;
        animation: ${rotate} 2s infinite linear;
    }
`;

export default SignButton;
