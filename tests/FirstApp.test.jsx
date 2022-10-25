import { cleanup, render, screen } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';

import { FirstApp } from '../src/FirstApp';

describe('<FirstApp />', () => {
    beforeEach(cleanup);

    const title = 'Hola, soy Goku';
    const subtitle = 'Soy un subtitulo';

    test('should match with the snapshot', () => {
        const { container } = render(<FirstApp title={title} />);

        // screen.debug();

        expect(container).toMatchSnapshot();
    });

    test('should show title inside h1 tag', () => {
        render(<FirstApp title={title} />);

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
            title
        );

        expect(screen.getByTestId('test-title').innerHTML).toContain(title);
    });

    test('should show subtitle passed by props', () => {
        render(<FirstApp title={title} subtitle={subtitle} />);

        expect(screen.getAllByText(subtitle).length).toBe(2);
    });
});
