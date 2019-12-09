import React from 'react';
import styled from 'styled-components';
import { above } from '../../utilities';

interface Props {
    clicks: number;
}

const Message = ({ clicks }: Props): JSX.Element => {
    return (
        <P>
            You&rsquo;ve done <span>{clicks}</span> clicks!
        </P>
    );
};

const P = styled.p`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    letter-spacing: 1px;

    ${above.med`
        font-size: 1.25rem;
    `}

    span {
        margin: 0.5rem 0;
        font-size: 1.25rem;

        ${above.med`
           font-size: 1.75rem;
        `}
    }
`;

export default Message;
