
import './App.css';
import React, { useState } from 'react'
import { Header } from './Components/Header';
// import CouterApplication from './Components/CouterApplication';
import StateByUsingArray from './Components/StateByUsingArray';
function App() {
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
    {/* <CouterApplication></CouterApplication> */}
    <Header></Header>
    {/* here we send a props  from one componet to another it is simply used to transer the data from parent to child componenet */}
    <StateByUsingArray title={"List Diplay"} subtitle={"Task"} task={task} show={show} setShow={setShow} handleDelete={handleDelete}></StateByUsingArray>
   </>
  );
}

export default App;
