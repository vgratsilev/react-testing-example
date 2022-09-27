import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './components/Navbar/Navbar';
import { renderWithRouter } from './tests/helpers/renderWithRouter';

describe('Routers', () => {
    test('Router test', () => {
        renderWithRouter(<Navbar />);
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');

        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();

        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test('Error page test', () => {
        renderWithRouter(null, '/testtest');

        expect(screen.getByTestId('error-page')).toBeInTheDocument();
    });
});
