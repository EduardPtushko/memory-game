import React from 'react';
import Hover from '../Hover/Hover';
import styled from 'styled-components';

interface Props {
    children?: React.ReactNode;
    text: string;
}

const Tooltip = ({ children, text }: Props): JSX.Element => {
    return (
        <Hover>
            {({ hovering }): JSX.Element => {
                return (
                    <Div>
                        {hovering === true && <div>{text}</div>}
                        {children}
                    </Div>
                );
            }}
        </Hover>
    );
};

const Div = styled.div`
    position: relative;
    display: flex;

    & > div {
        position: absolute;
        background-color: hsla(0, 0%, 20%, 0.9);
        padding: 7px;
        border-radius: 3px;
        top: 100%;
        font-size: 14px;
        text-align: center;
        right: 50%;
        width: 160px;
        margin-left: -80px;
        margin-bottom: 5px;
    }
`;

function isEqual(prevProps: Props, nextProps: Props): boolean {
    return (
        prevProps.children === nextProps.children ||
        prevProps.text === nextProps.text
    );
}

export default React.memo(Tooltip, isEqual);
