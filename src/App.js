import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './router/AppRouter';

function App() {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        //const timeoutId =
        setTimeout(() => {
            setData({});
        }, 100);
        //return clearTimeout(timeoutId);
    }, []);

    const onClick = () => {
        setToggle((prev) => !prev);
    };

    return (
        <div>
            <div>
                <h1 data-testid={'value-elem'}>{value}</h1>
                {toggle && <div data-testid={'toggle-elem'}>Toggle</div>}
                {data && (
                    <div
                        id={'data-div'}
                        className={'mydiv'}
                    >
                        hided element
                    </div>
                )}
                <h1>Test 1</h1>
                <button
                    type={'button'}
                    data-testid={'toggle-btn'}
                    onClick={onClick}
                >
                    Click
                </button>
                <input
                    type={'text'}
                    placeholder={'input value...'}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div>
                <Navbar />
                <AppRouter />
            </div>
        </div>
    );
}

export default App;
