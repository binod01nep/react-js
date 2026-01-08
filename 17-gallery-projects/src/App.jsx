import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card'
const App = () => {
  const [userData, setUserData] = useState([])
const [index, setindex] = useState(1)
  const getData=async ()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
    console.log(response.data);
    
  }
  useEffect(function(){
    getData()
  },[index])
  let printUserData=<h3 className='text-lg font-bold absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2' >loading.....</h3>
  if(userData.length>0){
    printUserData=userData.map(function(elem,idx){
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <div className='flex h-[82%] flex-wrap gap-4'>
        {printUserData}
      </div>
      <div className='flex gap-4 justify-center items-center p-4'>
        <button 
        style={{opacity:index==1?0.6:1}}
        className='bg-amber-400 cursor-pointer text-sm text-black rounded px-4 py-2'
        onClick={()=>{
          if(index>1){
            setindex(index-1)
            setUserData([])
          }
        }}>Prev</button>
        <h4>page {index}</h4>
        <button className='bg-amber-400 text-sm cursor-pointer text-black rounded px-4 py-2'
        onClick={()=>{
            setindex(index+1)
             setUserData([])
        }}>Next</button>
      </div>
    </div>
  )
}

export default App