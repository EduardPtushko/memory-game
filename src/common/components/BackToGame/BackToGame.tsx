import React from 'react';
import styled from 'styled-components';
import Tooltip from '../Tooltip/Tooltip';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import { BackButton } from '../../elements';

const Back = ({ text }): JSX.Element => {
    return (
        <Div>
            <Tooltip text={text}>
                <BackButton to='/'>
                    <ArrowIcon />
                </BackButton>
            </Tooltip>
        </Div>
    );
};

const Div = styled.div`
    position: absolute;
    right: 0;
`;

export default Back;
