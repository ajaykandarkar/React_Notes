import React from 'react'
import '../CSS/StateUsingArray.css'
// here we destructure the props
export const TaskCard = ({ task, handleDelete }) => {
    return (
        <>
            <li key={task.id} className={task.completed ? 'completed' : 'incomplete'}>
                <span>{task.id} - {task.name}</span>
                <button className='delete' onClick={() => handleDelete(task.id)}>Delete</button>
                {/* we need to used anonymes functon for delete it is used when we click we get it */}
            </li>
        </>
    )
}
