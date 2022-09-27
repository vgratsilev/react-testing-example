import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/reducers/counterReducer';
import { getCounterValue } from '../../store/reducers/selectors/getCounterValue/getCounterValue';

const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const onIncrement = () => {
        dispatch(increment());
    };

    const onDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <hr />
            <h1>Counter</h1>
            <h2 data-testid={'value-title'}>{value}</h2>
            <button
                type={'button'}
                data-testid={'decrement-btn'}
                onClick={onDecrement}
            >
                -
            </button>
            <button
                type={'button'}
                data-testid={'increment-btn'}
                onClick={onIncrement}
            >
                +
            </button>
        </div>
    );
};

export default Counter;
