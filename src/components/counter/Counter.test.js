import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderTestApp } from '../../tests/helpers/renderTestApp';
// import { renderWithRedux } from '../../tests/helpers/renderWithRedux';
import Counter from './Counter';

describe('Counter test', () => {
    test('router', async () => {
        const { getByTestId } = renderTestApp(null, {
            route: '/',
            initialState: {
                counter: {
                    value: 150,
                },
            },
        });
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const incrementBtn = getByTestId('increment-btn');
        expect(screen.getByTestId('value-title')).toBeInTheDocument();
        expect(screen.getByTestId('value-title')).toHaveTextContent('150');
        userEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('151');
    });
});
