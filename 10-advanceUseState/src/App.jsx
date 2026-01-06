import React, { useState } from 'react'

const App = () => {
  // const [num, setnum] = useState({user:'Binod',age:20})
    const [num, setnum] = useState({user:'binod',age:14})
    const [n, set] = useState(10)
  const btnClicked=()=>{
    set(prev=>(prev+1))
    set(prev=>(prev+1))
    set(prev=>(prev+1)) 
   // setnum(prev=>({...prev,age:50}))
    // const newNum=[...num]
    // newNum.push(99) 
    // setnum(newNum)
    
    // const newNum={...num};
    // newNum.user='Raju'
    // setnum(newNum)  
  }
  return (
    <div>
    <h1>{n}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App