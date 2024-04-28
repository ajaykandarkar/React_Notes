
import React, { useState } from 'react'
import '../CSS/Counter.css';
// I need to create a counter Application
// if i need increment it need to incerement the counter value
//I need to decrement i need to decrement the counter value 
const CouterApplication = () => {
    const [counterValue,setCounterValue] = useState(1);
    const [message, setMessage] = useState("Do not decrement")

    const incrementCounter = () =>{
        setCounterValue(counterValue+1);
        console.log(counterValue);
    }

    const decrementValue = () =>{
        if (counterValue < 0) return;
        setCounterValue(counterValue-1);
        
    }

    const displayValue = () => {
       return counterValue < 0  ? message : counterValue;
    }


  return (
     <>
      <div className='container'>
        <div className='card'>
         <h1 className='animate-charcter'>Counter</h1>
         <div>
         <h1>{displayValue()}</h1>
         </div>
           <div className='buttons'>
            <button className='btn-hover color-2' onClick={incrementCounter}>+</button>
            <button class="btn-hover color-1" onClick={decrementValue}>-</button>
           </div>
        </div>
      </div>
    
     </>
  )
}

export default CouterApplication