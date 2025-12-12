import { useState, useEffect } from "react";

export default function ConditionalLiveUserFetcher(){
    const [user, setUser] = useState(null)
    const [enabled, setEnabled] = useState(true)


    useEffect(() => {
        let interval
        const fetchData = async() => {
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
                const data = await res.json()
                setUser(data)
            }
            catch(error){
                console.error(error)
            }
        }
        if(enabled){
            fetchData()
             interval = setInterval(() => {
                fetchData()
            }, 5000);

        }
        return () => {
            clearInterval(interval)
        }
    }, [enabled])

    function handleClick(){
        setEnabled(!enabled)
    }

    return(
        <>
            <p>Name: {user?.name}</p>
            <p>Email Address: {user?.email}</p>
            <button onClick={handleClick}>{enabled ? 'Stop Fetching' : 'Start Fetching'}</button>
        </>
    )

}