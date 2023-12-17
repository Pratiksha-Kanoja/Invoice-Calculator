import React from 'react'

const TodoInput = ({todo,setTodo,addTodo}) => {
  return (
    <div className='input-wrapper'>
        <input type="text" name='todo' value={todo} placeholder='Add a new todo' onChange={(e)=>{
            setTodo(e.target.value);
        }} 
        />
        <button className='add-button' onClick={addTodo}> Add</button>
    </div>
  )
}

export default TodoInput