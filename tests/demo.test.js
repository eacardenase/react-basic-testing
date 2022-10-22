import { describe, test, expect } from 'vitest';

describe('Pruebas en <DemoComponent />', () => {
    test('should not fail', () => {
        // Arrange
        const message1 = 'Hola Mundo   ';

        // Act
        const message2 = message1.trim();

        // Assert
        expect(message2).not.toBe(message1);
    });
});
