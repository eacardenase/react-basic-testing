import { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    const incrementCounter = () => {
        // setCounter(counter + 1);
        setCounter((c) => c + 1);
    };

    const decrementCounter = () => setCounter((c) => c - 1);

    const resetCounter = () => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button onClick={decrementCounter}>-1</button>
            <button onClick={resetCounter}>Reset</button>
            <button onClick={incrementCounter}>+1</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

export default CounterApp;
