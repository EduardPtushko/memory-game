import React, { ReactNode, memo } from 'react';
import BackDrop from '../BackDrop/BackDrop';
import styled from 'styled-components';
import { Button } from '../../elements';
import { above } from '../../utilities';

interface Props {
    show: boolean;
    children?: ReactNode;
    onClose: () => void;
}

const Modal = ({ show, children, onClose }: Props): JSX.Element | null => {
    if (show === true) {
        return (
            <>
                <BackDrop close={onClose} show={show} />
                <Div>
                    {children}
                    <Button onClick={onClose}>Ok</Button>
                </Div>
            </>
        );
    }
    return null;
};

const Div = styled.div`
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #63464c;
    color: white;
    width: 200px;
    height: 200px;
    z-index: 500;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;

    ${above.med`
        width: 250px;
        height: 250px;
        padding: 1.5rem;
    `}

    button {
        color: #63464c;
        margin-top: auto;
        align-self: flex-end;

        ${above.med`
            font-size: .8rem;
        `}
    }
`;

function isEqual(prevProps: Props, nextProps: Props): boolean {
    return (
        prevProps.show === nextProps.show ||
        prevProps.children === nextProps.children
    );
}

export default memo(Modal, isEqual);
