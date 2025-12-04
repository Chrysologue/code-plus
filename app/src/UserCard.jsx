
import { useState } from "react"

export default function UserCard({ name, age, hobby, favorites, toggleFavorite, id }) {
    const [show, setShow] = useState(true)
    const isInFavorite = favorites.includes(id)
    const backgroundColor = isInFavorite ? 'lightyellow' : 'white'

    return (
        <div style={{backgroundColor: backgroundColor}}>
            <h1>I am {name}</h1>
            <p>I am {age} years old</p>
            <p>I am {age >= 18 ? 'an adult' : 'a minor'}</p>
            {show && <p>My hobby is {hobby}</p>}
            <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'} hobby</button>
            <button onClick={() =>toggleFavorite(id)}>
                {favorites.includes(id) ? 'Umark' : 'Add to'} Favorite
            </button>
        </div>
    )
}