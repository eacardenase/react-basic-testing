import { describe, test, expect } from 'vitest';

import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('09-promesas', () => {
    describe('getHeroByIdAsync()', () => {
        test('should return a hero by ID using promises', () => {
            const id = 1;

            const result = getHeroeByIdAsync(id);

            const expectedResult = {
                id: 1,
                name: 'Batman',
                owner: 'DC',
            };
            return expect(result).resolves.toEqual(expectedResult);
        });

        test('should return an error if there is no hero with the given id', () => {
            const id = 100;

            const result = getHeroeByIdAsync(id);

            return expect(result).rejects.toBe('No se pudo encontrar el héroe');
        });

        test('should return a hero by ID using async/await', async () => {
            const id = 1;

            const result = await getHeroeByIdAsync(id);

            const expectedResult = {
                id: 1,
                name: 'Batman',
                owner: 'DC',
            };
            expect(result).toEqual(expectedResult);
        });
    });
});
