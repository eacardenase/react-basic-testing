import { describe, test, expect } from 'vitest';

import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('02-template-string', () => {
    test('should return a string containing "Hola Edwin"', () => {
        const input = 'Edwin';

        const result = getSaludo(input);

        const expectedResult = `Hola ${input}`;
        expect(result).toBe(expectedResult);
    });
});
