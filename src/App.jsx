import { useState } from 'react';
import CounterApp from './CounterApp';

export const App = () => {
    return (
        <>
            <CounterApp value={0} />
        </>
    );
};
