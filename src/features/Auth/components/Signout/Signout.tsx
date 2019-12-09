import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../AuthSlice/actions';
import styled from 'styled-components';

const Signout = (): JSX.Element => {
    const dispatch = useDispatch();

    React.useEffect((): (() => void) => {
        const id = setTimeout(() => {
            dispatch(signOut());
        }, 1500);

        return (): void => clearTimeout(id);
    }, []);

    return <Heading>Sorry to see you go</Heading>;
};

const Heading = styled.h1`
    margin-top: 20%;
    text-align: center;
    color: #fff;
    font-weight: 300;
    letter-spacing: 2px;
    font-size: 2.5rem;
`;

export default Signout;
