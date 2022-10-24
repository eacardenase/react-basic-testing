import { describe, test, expect } from 'vitest';

import {
    getHeroeById,
    getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('08-imp-exp', () => {
    describe('getHeroeById()', () => {
        test('should should return a hero by ID', () => {
            const id = 1;

            const result = getHeroeById(id);

            const expectedResult = {
                id: 1,
                name: 'Batman',
                owner: 'DC',
            };
            expect(result).toEqual(expectedResult);
        });

        test('should return undefined if no hero exists by given id', () => {
            const id = 100;

            const result = getHeroeById(id);

            expect(result).toBeUndefined();
        });
    });

    describe('getHeroesByOwner()', () => {
        test('should return all heroes owned by DC', () => {
            const testOwner = 'DC';

            const result = getHeroesByOwner(testOwner);

            const expectedResult = heroes.filter(
                (hero) => hero.owner === testOwner
            );
            expect(result.length).toBe(3);
            expect(result).toEqual(expectedResult);
        });

        test('should return all heroes owned by Marvel', () => {
            const testOwner = 'Marvel';

            const result = getHeroesByOwner(testOwner);

            expect(result.length).toBe(2);
        });
    });
});
