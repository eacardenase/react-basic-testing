import { describe, test, expect } from 'vitest';

import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('05-funciones', () => {
    describe('getUser()', () => {
        test('should return an object', () => {
            const result = getUser();

            const expectedResult = {
                uid: 'ABC123',
                username: 'El_Papi1502',
            };
            expect(result).toEqual(expectedResult);
        });
    });

    describe('getUsuarioActivo', () => {
        test('should return an object', () => {
            const testName = 'Edwin';

            const result = getUsuarioActivo(testName);

            const expectedResult = {
                uid: 'ABC567',
                username: testName,
            };
            expect(result).toEqual(expectedResult);
        });
    });
});
