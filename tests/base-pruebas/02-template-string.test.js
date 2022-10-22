import { describe, test, expect } from 'vitest';

import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('getSaludo()', () => {
    test('should return a string containing "Hola Edwin"', () => {
        getSaludo('test');
    });
});
