import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackButton = styled(Link)`
    color: #fff;
    text-decoration: none;
    translate: transform 0.2s ease-out;
    margin-bottom: 0.25rem;

    &:hover {
        transform: scale(1.05);
    }
`;
