import React, { useState } from 'react'
import {X} from 'lucide-react'
const App = () => {
  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault();
    
    const copyTask=[...task];
    copyTask.push({title,details})
    settask(copyTask)
    
    
    settitle('')
    setdetails('')
  }
  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1)
    settask(copyTask)
    
    
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex lg:w-1/2 items-start p-10 flex-col gap-4'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
          <input type="text" placeholder='Enter Notes Heading' className='px-5 py-2 font-medium w-full border-2 outline-none rounded' value={title} onChange={(e)=>{
            settitle(e.target.value)
          }}/>
        <textarea type="text" placeholder='Enter details' className='px-5 py-2  font-medium w-full h-32 border-2 outline-none rounded' value={details} onChange={(e)=>{
          setdetails(e.target.value)
        }}/>
        <button className='bg-white active:bg-gray-300 text-black px-5 py-2 font-medium w-full rounded'>Add Note</button>
       
      </form>
      <div className=' lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recents Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-[95%]'>
          {task.map(function(elem,idx){
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-2xl text-black pb-4 pt-9 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight text-sm font-medium text-gray-700'>{elem.details}</p>
              
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full bg-red-500 py-1 cursor-pointer active:scale-95 text-xs rounded font-bold text-white'>delete</button>
            </div>
          })}
        </div>
    </div>
    </div>
  )
}

export default App