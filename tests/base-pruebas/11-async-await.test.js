import { describe, test, expect } from 'vitest';

import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('11-async-await', () => {
    describe('getImagen()', () => {
        test('should return the url of the image', async () => {
            const response = await getImagen(
                '60r65gesvwiJUZsgBemkHIEViuiEbHjp'
            );

            expect(response).toContain('https');
        });

        test('should throw an error if no valid API is provided', async () => {
            /* 
            getImage() is an async function, so it always returns a promise
            (either resolved or rejected). When we throw an error in an async 
            function it's like we're rejecting the promise.
            */
            const resultFc = async () => await getImagen('notAnAPIKey');

            return expect(resultFc).rejects.toThrow();
        });
    });
});
