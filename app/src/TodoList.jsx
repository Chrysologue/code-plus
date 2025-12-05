import { useState } from "react";

export default function TodoList(){
    const [todos, setTodos] = useState(["Learn React", "Buy groceries"])
    const [item, setItem] = useState('')
    const todoList = todos.map(todo => 
    <li
        key={todo}
    >
        {todo} <button
            onClick={() => setTodos(todos.filter(t => t !== todo))}
        >
            Delete
        </button>
    </li>)

    return (
        <>
            <input 
            placeholder="Enter todo"
            type="text" 
            value={item}
            onChange={(e) => setItem(e.target.value)}
            />
            <button 
            disabled={!item.trim()}
            onClick={() => {
                setItem('')
                setTodos([
                    ...todos,
                    item
                ])
                
            }}
            >
                Add todo
            </button>
            <ul>{todoList}</ul>
        </>
    )
}