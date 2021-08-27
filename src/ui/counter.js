import React, { useState, useEffect } from 'react';
import BigBlueButton from '../ui/buttons';

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`
    });
    return(
        <div>
            <p>The current count is {count}.</p>
            <BigBlueButton onClick={() => setCount(count + 1)}>Click to add 1 to counter.</BigBlueButton>
            <BigBlueButton onClick={() => setCount(count - 1)}>Click to subtract 1 from counter.</BigBlueButton>
        </div>
    )
}