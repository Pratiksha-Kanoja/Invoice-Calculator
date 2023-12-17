import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const router = useNavigate();
  return (
    <div>
        <h1>INVOICE</h1>
        <button onClick={()=>router('/invoicecalc')}>Invoice 1</button>
        <button onClick={()=>router('/invoicecal2')}>Invoice 2</button>

        <h1>Todo</h1>
        <button onClick={()=>router('/todo')}>Todo</button>
        <button onClick={()=>router('/todoinput')}>Todo Input</button>
        <button onClick={()=>router('/todolist')}>Todo List</button>

    </div>
  )
}

export default Homepage