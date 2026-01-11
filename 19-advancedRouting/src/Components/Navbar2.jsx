import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate=useNavigate()
  return (
    <div className='py-2 px-5 bg-cyan-700'>
         <button className='bg-emerald-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 font-medium' onClick={()=>{
        navigate('/')
      }}>Return to Homepage</button>
      <button className='bg-emerald-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 font-medium' onClick={()=>{
        navigate(-1)
      }}>Back</button>
      <button className='bg-emerald-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 font-medium' onClick={()=>{
        navigate(1)
      }}>Next</button>
    </div>
  )
}

export default Navbar2