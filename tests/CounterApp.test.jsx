import { describe, test, expect, beforeEach } from 'vitest';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import CounterApp from '../src/CounterApp';

describe('<CounterApp />', () => {
    beforeEach(cleanup);

    const initialValue = 100;

    test('should match with the snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />);

        expect(container).toMatchSnapshot();
    });

    test('should show initial value set to 100', () => {
        render(<CounterApp value={initialValue} />);

        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
            100
        );
    });

    test('should increment when pressing +1 button', () => {
        render(<CounterApp value={initialValue} />);

        fireEvent.click(screen.getByText('+1'));

        expect(screen.getByText(initialValue + 1)).toBeTruthy();
    });

    test('should decrease when pressing -1 button', () => {
        render(<CounterApp value={initialValue} />);

        // fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByRole('button', { name: '-1' }));

        expect(screen.getByText(initialValue - 1)).toBeTruthy();
    });

    test('should reset value when pressing Reset button', () => {
        render(<CounterApp value={initialValue} />);

        fireEvent.click(screen.getByRole('button', { name: '+1' }));
        fireEvent.click(screen.getByRole('button', { name: '+1' }));
        fireEvent.click(screen.getByRole('button', { name: '+1' }));

        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect(screen.getByText(initialValue)).toBeTruthy();
    });
});
