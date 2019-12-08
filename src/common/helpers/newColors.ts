import { generateColors, shuffle } from '.';
import { ColorElement } from '../../types';

export const newColors = (num: number): ColorElement[] => {
    const colors = generateColors(num);
    const shuffledColors = shuffle([...colors, ...colors]);

    return Array.from(shuffledColors, (bcgColor, i) => ({
        bcgColor,
        open: false,
        id: i
    }));
};
