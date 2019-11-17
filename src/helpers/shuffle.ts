export const shuffle = <T>(arr: T[]): T[] => {
    if (arr.length === 0) return arr;

    let i = arr.length - 1,
        j,
        temp;

    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
};
