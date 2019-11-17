const random = (): number => {
    return Math.floor(Math.random() * 256);
};

const makeColor = (): string => {
    return `rgb(${random()}, ${random()}, ${random()})`;
};

export const generateColors = (num: number): string[] => {
    if (num <= 0) {
        return [];
    }
    const arr = Array.from({ length: num }, () => makeColor());
    return arr;
};
