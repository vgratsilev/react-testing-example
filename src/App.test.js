/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { renderWithRouter } from './tests/helpers/renderWithRouter';

describe('TEST APP', () => {
    test('renders', () => {
        renderWithRouter(<App />);
        const h1 = screen.getByText(/Test 1/i);
        const button = screen.getByRole('button');
        const input = screen.getByPlaceholderText(/input value/i);
        expect(h1).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(input).toMatchSnapshot();
        //screen.debug();
    });

    test('Async showed element', async () => {
        renderWithRouter(<App />);
        // const h1 = screen.queryByText(/hello2/i);
        // expect(h1).toBeNull();

        const elem = await screen.findByText('hided element');
        // expect(elem).toBeNull();
        expect(elem).toBeInTheDocument();
        expect(elem).toHaveClass('mydiv');
        screen.debug();
    });

    test('Btn Click event', () => {
        renderWithRouter(<App />);
        const btn = screen.getByTestId('toggle-btn');
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
        fireEvent.click(btn);
        // eslint-disable-next-line testing-library/prefer-presence-queries
        expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
    });

    test('Input synthetic event', () => {
        renderWithRouter(<App />);
        const input = screen.getByPlaceholderText(/input value/i);
        expect(screen.queryByTestId('value-elem')).toContainHTML('');

        // synthetic event
        fireEvent.input(input, {
            target: { value: '123456' },
        });
        expect(screen.queryByTestId('value-elem')).toContainHTML('123456');
    });

    test('Input user event', () => {
        renderWithRouter(<App />);
        const input = screen.getByPlaceholderText(/input value/i);
        expect(screen.queryByTestId('value-elem')).toContainHTML('');

        // user event
        userEvent.type(input, '123456');
        expect(screen.queryByTestId('value-elem')).toContainHTML('123456');
    });
});
