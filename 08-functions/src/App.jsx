import React from 'react'

const App = () => {
  const pageScrolling=(elem)=>{
    console.log("page is scrolling...at",elem)
  }
  return (
    <div onWheel={
      (elem)=>{
   // console.log(elem.deltaY)
    pageScrolling(elem.deltaY)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App