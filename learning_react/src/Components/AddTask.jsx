import React, { useState } from 'react';
import '../CSS/StateUsingArray.css';

export const AddTask = ({ task, setTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTaskObject = {
      id: Math.floor(Math.random() * 10000),
      name: newTask,
      completed: true,
    };
    console.log("new task ", newTaskObject);
    setTask([...task,newTaskObject]);
    //here we need to pass previous task and new task
    setNewTask(''); // Clear the input field after submitting
  };

  return (
    <section className='addtask'>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <input onChange={handleChange} type='text' name='task' id='task' placeholder='Enter a task' value={newTask}/>
        <button className='button-19' type='submit'>Add Task</button>
      </form>
    </section>
  );
};
