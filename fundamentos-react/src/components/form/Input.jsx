import './Input.css';

import { useState } from 'react';

const Input = (props) => {

    const [value, setValue] = useState('Initial');

    function whenChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className='Input'>
            Input: <br />
            <h3>{value}</h3>
            <div className='Content'>
                <input type="text" value={value} onChange={whenChange} />
                <input type="text" value={value} readOnly />
                <input type="text" value={undefined} />
            </div>
        </div>
    )
}

export default Input;