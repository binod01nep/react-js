import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const App = () => {
  // async function getData(){
  //   const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
  // }
  // const getData=async()=>{
  //   const response=await fetch('https://jsonplaceholder.typicode.com/users') 
  //   const data=await response.json();
  //   console.log(data); 
  // }
  // const getData=async () => {
  //   // const response=await axios.get('https://jsonplaceholder.typicode.com/users')
  //   // console.log(response.data);
  //   // const {data}=await axios.get('https://jsonplaceholder.typicode.com/users')
  //   // console.log({data});
    
  // }
  const [data, setdata] = useState([])
  const getData=async ()=>{
    const response=await axios.get('https://picsum.photos/v2/list')
    setdata(response.data)
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>Hello,{elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App