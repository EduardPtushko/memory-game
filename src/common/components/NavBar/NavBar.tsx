import React from 'react';
import { Wrapper } from '../../utilities';
import styled from 'styled-components';
import { cyanBlue } from '../../utilities';
import { Button } from '../../elements';
import NumberInput from '../NumberInput/NumberInput';
import Tooltip from '../UIElements/Tooltip/Tooltip';
import Menu from '../../../features/Account/components/Menu/Menu';

interface Props {
    newGame: (num: number) => void;
    initialValue: number;
    getNumberColors: (num: number) => void;
    numberColors: number;
}

const NavBar = ({
    newGame,
    initialValue,
    getNumberColors,
    numberColors
}: Props): JSX.Element => {
    return (
        <Header>
            <Wrapper>
                <div className='header-container'>
                    <div>Memory Game</div>

                    <div className='header-right'>
                        <Tooltip text='You can choose between 5 and 40 colors'>
                            <NumberInput
                                getNumberColors={getNumberColors}
                                initialValue={initialValue}
                            />
                        </Tooltip>
                        <Button onClick={(): void => newGame(numberColors)}>
                            New Colors
                        </Button>
                    </div>
                    <Menu />
                </div>
            </Wrapper>
        </Header>
    );
};

const Header = styled.header`
    background-color: ${cyanBlue};

    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        color: white;

        .header-right {
            display: flex;
        }
    }
`;

export default NavBar;
