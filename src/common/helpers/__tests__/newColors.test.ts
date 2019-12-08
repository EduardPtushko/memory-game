import { newColors } from '../newColors';

describe('newColors', (): void => {
    test('returns empty array when argument is zero', (): void => {
        const colors = newColors(0);

        expect(colors).toBeArray();
        expect(colors).toHaveLength(0);
    });

    test('correctly returns array of colors objects', (): void => {
        const colors = newColors(1);

        expect(colors).toEqual([
            {
                id: 0,
                bcgColor: expect.any(String),
                open: false
            },
            {
                id: 1,
                bcgColor: expect.any(String),
                open: false
            }
        ]);
    });
});
