import React from 'react'

// it is a functional components it is a simple javascript function
// there are two type of componenet one is class componenet and another is functional componenet
// class componenet is extend from react componenet 
// in class componenet we need to write render for our code
// functional componenet there is no need to write render in functional componenet we simply write return 

const HeloWorldComponenet = () => {
  return (
    // it is a simple frament it does not occupy the space of our scrren that is why it is used
    <>  
       <h1>Hello world</h1>
    </>
  )
}

export default HeloWorldComponenet