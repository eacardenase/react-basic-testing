import { cleanup, render, screen } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';

import { FirstApp } from '../src/FirstApp';

describe('<FirstApp />', () => {
    beforeEach(cleanup);

    test('should match with the snapshot', () => {
        const title = 'Hola soy Goku';

        const { container } = render(<FirstApp title={title} />);

        expect(container).toMatchSnapshot();
    });

    test('should show title inside h1 tag', () => {
        const title = 'Hola soy Goku';

        const { container, getByText } = render(<FirstApp title={title} />);

        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);
    });
});
