
import { useState } from 'react';
import UserCard from './UserCard'

export default function App() {

  const [favorites, setFavorites] = useState([])
  const userFavorites = favorites.length

  function toggleFavorite(id){
    if(!favorites.includes(id)){
      setFavorites([...favorites, id])
    }
    else {
      setFavorites(favorites.filter(favId => favId != id))
    }
  }

  const users = [
    {
      id: 1,
      name: "Alice",
      age: 24,
      hobby: "Reading"
    },
    {
      id: 2,
      name: "Brandon",
      age: 29,
      hobby: "Cycling"
    },
    {
      id: 3,
      name: "Clara",
      age: 15,
      hobby: "Cooking"
    },
    {
      id: 4,
      name: "David",
      age: 22,
      hobby: "Gaming"
    },
    {
      id: 5,
      name: "Ella",
      age: 27,
      hobby: "Painting"
    }
  ];

  const userLists = users.map(user => 
    <UserCard 
      key={user.id}
      id={user.id}
      favorites={favorites}
      toggleFavorite={toggleFavorite}
      name={user.name}
      age={user.age}
      hobby={user.hobby}
    />
  )

  return (
    <>
      <h1>Favorite users: {userFavorites}</h1>
      {userLists}
    </>
  )
}