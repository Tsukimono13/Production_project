import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('common button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('button with class', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
