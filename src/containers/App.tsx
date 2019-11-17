import React, { useCallback } from 'react';
import GlobalStyle from '../Global';
import NavBar from '../components/NavBar/NavBar';
import ColorLists from '../components/ColorLists/ColorLists';
import { newColors, opennedColors } from '../helpers';
import Message from '../components/UI/Message/Message';
import Modal from '../components/UI/Modal/Modal';
import { ColorElement } from '../types';

interface Props {
    numberInitialColors: number;
}

interface ColorsState {
    colors: ColorElement[];
    previousId: null | number;
}

const App = ({ numberInitialColors }: Props): JSX.Element => {
    const [colorsState, setColorsState] = React.useState<ColorsState>(() => ({
        colors: newColors(numberInitialColors),
        previousId: null
    }));

    const [clicks, setSlicks] = React.useState(0);
    const [gameOver, setGameOver] = React.useState(false);
    const [numberColors, setNumberColors] = React.useState(numberInitialColors);

    const onSetColors = (colors: ColorElement[], colorId: number): void => {
        setColorsState({
            colors,
            previousId: colorId
        });
    };

    const handleClick = useCallback(
        (colorId: number): void => {
            const { colors, previousId } = { ...colorsState };
            const openned = opennedColors(colors);
            colors[colorId].open = true;

            if (openned % 2 !== 0) {
                if (
                    colors[previousId as number].bcgColor !==
                    colors[colorId].bcgColor
                ) {
                    setTimeout(() => {
                        colors[previousId as number].open = false;
                        colors[colorId].open = false;

                        onSetColors(colors, colorId);
                    }, 300);
                } else {
                    onSetColors(colors, colorId);
                }
            } else {
                onSetColors(colors, colorId);
            }
            setSlicks(click => click + 1);

            if (colors.every(el => el.open === true)) {
                setGameOver(true);
            }
        },
        [colorsState]
    );

    const onNewGame = (num: number): void => {
        setColorsState({
            colors: newColors(num),
            previousId: null
        });
    };

    const onCloseModal = useCallback((): void => {
        onNewGame(numberColors);
        setSlicks(0);
        setGameOver(false);
    }, []);

    const onNumberColorsChange = (num: number): void => {
        setNumberColors(num);
    };

    return (
        <>
            <NavBar
                newGame={onNewGame}
                getNumberColors={onNumberColorsChange}
                initialValue={numberInitialColors}
                numberColors={numberColors}
            />
            {gameOver && (
                <Modal show={gameOver} onClose={onCloseModal}>
                    <Message clicks={clicks} />
                </Modal>
            )}

            <ColorLists colors={colorsState.colors} clicked={handleClick} />
            <GlobalStyle />
        </>
    );
};

App.defaultProps = {
    numberInitialColors: 5
};

export default App;
