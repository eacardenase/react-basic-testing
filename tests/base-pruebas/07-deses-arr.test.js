import { describe, test, expect } from 'vitest';

import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('07-deses-arr', () => {
    test('should return a string and a number', () => {
        const [letter, number] = retornaArreglo();

        expect(letter).toBeTypeOf('string');
        expect(number).toBeTypeOf('number');
    });
});
