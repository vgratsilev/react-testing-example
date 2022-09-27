import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderTestApp } from '../../tests/helpers/renderTestApp';
// import { renderWithRouter } from '../../tests/helpers/renderWithRouter';
import Navbar from './Navbar';

describe('TEST Navbar', () => {
    test('about link', () => {
        //renderWithRouter(<Navbar />);
        renderTestApp(<Navbar />, { route: '/', initialState: {} });
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });

    test('main link', () => {
        //renderWithRouter(<Navbar />);
        renderTestApp(<Navbar />, { route: '/', initialState: {} });
        const mainLink = screen.getByTestId('main-link');
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test('users link', () => {
        //renderWithRouter(<Navbar />);
        renderTestApp(<Navbar />, { route: '/', initialState: {} });
        const usersLink = screen.getByTestId('users-link');
        userEvent.click(usersLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    });
});
