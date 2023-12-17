import React from 'react'

const TodoList = ({list,remove}) => {
  return (
    <div style={{marginTop:"30px"}}>
        {list?.length > 0 ? (
            <ul className='todo-list'>
                {list.map((entry,index) => (
                    <div className='todo' style={{marginTop:"20px"}}>
                        <li key={index}>{entry}</li>

                        <button className='delete-button' onClick={()=>{remove(entry);}}>Delete</button>
                    </div>
                ))}
            </ul>
        ) :(
            <div className='empty' style={{marginTop:"30px"}}>
                <p>No task found</p>
            </div>
        )
    }
    </div>
  )
}

export default TodoList