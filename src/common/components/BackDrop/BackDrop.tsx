import React from 'react';
import styled from 'styled-components';

import { cyanBlue } from '../../utilities';
import { transparentize } from 'polished';

interface Props {
    show: boolean;
    close: () => void;
}

const BackDrop = ({ show, close }: Props): JSX.Element | null => {
    if (show === true) {
        return <Div onClick={close}></Div>;
    }
    return null;
};

const Div = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: ${transparentize('0.4', cyanBlue)};
`;
export default BackDrop;
