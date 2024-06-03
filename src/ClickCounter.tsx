import React, { useState } from "react";


const ClickCounter = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount((c) => c + 1);
    }
    return (
        <div>
            <button onClick={handleClick}>Count {count}</button>
        </div>
    )
}

export default ClickCounter;