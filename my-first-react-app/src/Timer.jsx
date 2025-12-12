import { useEffect, useState } from "react";

export default function Timer(){
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 1000);

        return () => {
            clearInterval(timeInterval)
        }
    }, [])

    return (
        <>
            <p>{seconds} {seconds <= 1 ? 'second' : 'seconds'}</p>
        </>
    )
}