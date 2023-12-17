import React, { useState } from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './Todo.css'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const addTodo = () => {
        if (todo !== "") {
            setTodos([...todos, todo]);
            setTodo("");
        }
    };

    const deleteTodo = (text) => {
        const newTodos = todos.filter((todo) => {
            return todo !== text;
        });
        setTodos(newTodos);
    }
    return (
        <div className='Todo'>
            <h1>Todo</h1>
            <div><TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} /></div>
            <div><TodoList list={todos} remove={deleteTodo} /></div>
        </div>
    )
}

export default Todo