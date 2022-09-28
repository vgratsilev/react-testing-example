import React, { useState } from 'react';

const TestE2E = () => {
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);

    const toggle = () => value === 'Vadim' && setVisible((prev) => !prev);
    const onChange = (e) => setValue((e.target.value));

    return (
        <div>
            <input
                type={'text'}
                id={'search'}
                onChange={onChange}
            />
            <button
                type={'button'}
                id={'toggle'}
                onClick={toggle}
            >
                Test E2E
            </button>
            {visible && <h1 id={'test'}>Test</h1>}
        </div>
    );
};

export default TestE2E;
