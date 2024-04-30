import './Mega.css';

import { useState } from 'react';

const Mega = (props) => {
    const { quantity } = props;

    const [qtt, setQuantity] = useState(quantity || 6);
    const initialNumbers = generateNumbers(quantity);
    const [numbers, setNumbers] = useState(initialNumbers);

    function generateNumbers(quantity) {
        let min = 1;
        let max = 60;
        const numbers = Array(quantity)
            .fill(0)
            .reduce((nums) => {
                const number = generateUniqueNumber(min, max, nums);

                return [...nums, number];
            }, [])
            .sort((n1, n2) => n1 - n2);
        return numbers;

    }

    function generateUniqueNumber(min, max, array) {
        let number = parseInt(Math.random() * (max + 1 - min) + min);

        if (array.includes(number)) {
            return generateUniqueNumber(min, max, array);
        }

        return number;
    }

    function getNumbers(numbers) {
        return numbers.map((n, i) => {
            return (
                <span className='Circle'>{n}</span>
            )
        })
    }

    return (
        <div className='Mega'>
            <h2>Mega</h2>
            <h3>{getNumbers(numbers)}</h3>
            <div>
                <label>Quantity of numbers</label>
                <input
                    min="6"
                    max="15"
                    type="number"
                    value={qtt}
                    onChange={e => {
                        setQuantity(+e.target.value)
                        setNumbers(generateNumbers(+e.target.value))
                    }}
                />
            </div>
            <button onClick={_ => setNumbers(generateNumbers(qtt))}>
                Generate Numbers
            </button>
        </div>
    );
}



export default Mega;