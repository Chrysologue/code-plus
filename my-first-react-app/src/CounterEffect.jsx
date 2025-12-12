import { useState, useEffect } from "react";

export default function CounterEffect(){
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Alice')

    useEffect(() => {
        console.log('Count changed')
    }, [count])

    return(
        <>
            <h2>Count: {count}</h2>
            <h2>Hello {name}!</h2>
            <button onClick={e => setCount(prev => prev + 1)}>Increment</button>
            <button onClick={e => setName('Bob')}>Change name</button>

        </>
    )
}