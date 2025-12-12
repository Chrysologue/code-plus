import { useState, useEffect } from "react";

export default function UserFetcher() {
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
        fetchData()
    }, [])

   return (
        <div>
            {user && 
                <>
                    <h1>Name: {user.name}</h1>
                    <p>Email Address: {user.email}</p>
                </>
            }
        </div>
    );
}