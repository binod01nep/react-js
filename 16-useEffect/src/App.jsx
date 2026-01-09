import React, { act, useEffect, useState } from 'react'

const App = () => {
  const [a, seta] = useState(0)
  const [b, setb] = useState(0)
  function aChanging(){
    console.log('value of a is changed');
    
  }
  function bChanging(){
    console.log('b changing')
  }
  useEffect(function(){
    aChanging()
    console.log('use effect is running....')
  },[a])
  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        seta(a+1)
      }}>Change A</button>
      <button onClick={()=>{
        setb(b+1)
      }}>Change B</button>
    </div>
  )
}

export default App
// import React, { useEffect, useState } from 'react'

// const App = () => {
//  const [num2, setnum2] = useState(100)
//  const [num, setnum] = useState(0)
//   useEffect(function(){
//     console.log('use effect is running......');
    
//   },[num])
  
//   return (
//     <div>
//       <h2>value of num is {num}</h2>
//       <h2>value of num2 is {num2}</h2>
//       <button onMouseEnter={()=>{
//           setnum(num+1)
          
//       }} onMouseLeave={()=>{
//         setnum2(num2+10)
//       }}>Click</button>
//     </div>
//   )
// }

// export default App