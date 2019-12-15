import React from 'react';
import { Wrapper, cyanBlue } from '../../../../common/utilities';
import styled from 'styled-components';
import Tooltip from '../../../../common/components/Tooltip/Tooltip';
import Menu from '../../../Auth/components/Menu/Menu';
import { Button } from '../../../../common/elements';
import NumberInput from '../NumberInput/NumberInput';

interface Props {
    newGame: () => void;
    initialValue: number;
    getNumberColors: (num: number) => void;
}

const NavBar = ({
    newGame,
    initialValue,
    getNumberColors
}: Props): JSX.Element => {
    return (
        <Header>
            <Wrapper>
                <HeaderBox>
                    <div>Memory Game</div>

                    <div>
                        <Tooltip text='You can choose between 5 and 40 colors'>
                            <NumberInput
                                getNumberColors={getNumberColors}
                                initialValue={initialValue}
                            />
                        </Tooltip>
                        <Button onClick={newGame}>New Colors</Button>
                    </div>
                    <Menu />
                </HeaderBox>
            </Wrapper>
        </Header>
    );
};

const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    color: white;

    & > div:nth-of-type(2) {
        display: flex;
    }
`;

const Header = styled.header`
    background-color: ${cyanBlue};
`;

export default NavBar;
