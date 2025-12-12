import { useState, useEffect } from "react";

export default function LiveUserFetcher() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
                const data = await response.json()
                setUser(data)
            }
            catch (error) {
                console.error(error)
            }
        }
        const interval  = setInterval(() => {
            fetchData()
        }, 5000);

        return () => {
            clearInterval(interval)
        }
    }, [])

    return(
        <>
            <h2>Name: {user?.name}</h2>
            <h2>Email: {user?.email}</h2>
        </>
    )
}