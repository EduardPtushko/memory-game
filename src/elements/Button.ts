import styled from "styled-components";
import { cyanBlue } from "../utilities";
import { darken } from "polished";

export const Button = styled.button`
    border: 1px solid white;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    color: ${cyanBlue};
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.025);
        color: ${darken(0.2, cyanBlue)};
    }
`;
