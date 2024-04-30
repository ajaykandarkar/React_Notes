import React, { useState } from 'react'

import '../CSS/StateUsingArray.css'

const StateByUsingArray = () => {
    // task is to show list and delete
    // conditional statement 
    // if task is complete i need to display
    //limitaion of state

    const [task, setTask] = useState([{ id: 1, name: "record Lecture", completed: true }, { id: 2, name: "Edit Lecture", completed: false }, { id: 3, name: "watch Lecture", completed: false }])
    const [show, setShow] = useState(true);
    function handleDelete(id) {
        const newData = task.filter((task) => (
            id !== task.id
        ))
        
        setTask(newData)
    }

    return (
        <>
            <div className='container'>
                <div className='card'>
                    <h1>List of item</h1>
                    <ul>
                        <button onClick={()=>setShow(!show)}>Togle</button>
                        {show && task.map((task) => (
                            // Apply css by ternary operator
                            <li key={task.id} className={task.completed ? 'completed' : 'incomplete'}>
                                <span>{task.id} - {task.name}</span>
                                <button className='delete' onClick={() => handleDelete(task.id)}>Delete</button>
                                {/* we need to used anonymes functon for delete it is used when we click we get it */}
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default StateByUsingArray