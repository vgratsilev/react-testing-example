/* eslint-disable testing-library/no-debugging-utils */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import axios from 'axios';

// import Users from './Users';
// import { renderWithRouter } from '../../tests/helpers/renderWithRouter';
import { renderTestApp } from '../../tests/helpers/renderTestApp';

jest.mock('axios');

describe('USERS async Load', () => {
    let response;
    beforeAll(() => {
        response = {
            data: [
                { id: 1, name: 'Leanne Graham' },
                { id: 2, name: 'Ervin Howell' },
                { id: 3, name: 'Clementine Bauch' },
            ],
        };
    });
    beforeEach(() => {
        axios.get.mockReturnValue(response);
    });
    test('render', async () => {
        //renderWithRouter(<Users />);
        renderTestApp(null, {
            route: '/users',
            initialState: {},
        });
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug();
    });

    test('redirect to user details', async () => {
        //renderWithRouter(<Users />);
        renderTestApp(null, { route: '/users', initialState: {} });

        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        userEvent.click(users[0]);
        expect(screen.getByTestId('user-details-page')).toBeInTheDocument();
        screen.debug();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});
