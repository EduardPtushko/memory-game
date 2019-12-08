import { ColorElement } from '../../types/index';

export const opennedColors = (colors: ColorElement[]): number =>
    colors.reduce((acc, nextColor) => {
        if (nextColor.open === true) {
            acc++;
            return acc;
        }
        return acc;
    }, 0);
