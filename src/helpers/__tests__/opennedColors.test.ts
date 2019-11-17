import { opennedColors } from '../opennedColors';
import { colors } from '../../../test/fixture/collors';

describe('opennedColors', (): void => {
    test('gets 0 when all open properties is false', (): void => {
        const result = opennedColors(colors);

        expect(result).toBe(0);
    });

    test('gets 1 when  one property is true', (): void => {
        colors[0].open = true;
        const result = opennedColors(colors);

        expect(result).toBe(1);
    });
});
