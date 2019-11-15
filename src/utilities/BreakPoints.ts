import { css, FlattenSimpleInterpolation } from 'styled-components';

interface Size {
    small: number;
    med: number;
    large: number;
    [label: string]: number;
}

const size: Size = {
    small: 576,
    med: 768,
    large: 992,
    extraLarge: 1200
};

export const above: Record<string, Function> = Object.keys(size).reduce(
    (acc: Record<string, Function>, label: string) => {
        acc[label] = (
            literals: TemplateStringsArray,
            ...placeholders: any[]
        ): FlattenSimpleInterpolation => css`
            @media (min-width: ${size[label] / 16}em) {
                ${css(literals, ...placeholders)}
            }
        `;
        return acc;
    },
    {}
);
