import '../CSS/StateUsingArray.css'
import { TaskCard } from './TaskCard'

// Here we can used all data of props 
const StateByUsingArray = (props) => {
    // task is to show list and delete
    // conditional statement 
    // if task is complete i need to display
    //limitaion of state
    return (
        <>
            <div className='container'>
                <div className='card'>
                    <h1>{props.title} {props.subtitle} </h1>
                    <ul>
                        <button onClick={()=>props.setShow(!props.show)}>Togle</button>
                        {props.show && props.task.map((task) => (
                            // Apply css by ternary operator
                           <TaskCard task={task} handleDelete={props.handleDelete}/>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default StateByUsingArray