import React from 'react'

// it is a functional components it is a simple javascript function
// there are two type of componenet one is class componenet and another is functional componenet
// class componenet is extend from react componenet 
// in class componenet we need to write render for our code
// functional componenet there is no need to write render in functional componenet we simply write return 

const HeloWorldComponenet = () => {
    let name = "ajay";
  return (
    // it is a simple frament it does not occupy the space of our scrren that is why it is used
    <>  
    {/* it is a jsx means javascritpt extension it is allow two write a html code in javascript file */}
    {/* for writitng jsx we need to cover up your all code in single element for ex it is div or fragment */}
    {/* in jsx we can used class for className we used all styling in camelcasing */}
    {/* by using jsx we can pass javascript code */}
       <h1>Hello world</h1>
       <p>my name is {name}</p>
    </>
  )
}

export default HeloWorldComponenet