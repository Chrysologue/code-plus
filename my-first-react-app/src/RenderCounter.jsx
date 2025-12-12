import { useRef, useState, useEffect } from "react";

export default function RenderCounter() {
    const [count, setCount] = useState(0)
    const renderCount = useRef(0)
    renderCount.current += 1


    return (
        <>
            <p>Count: {count}</p>
            <p>Render count: {renderCount.current}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </>
    )
}