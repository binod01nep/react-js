import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman Gupta' age={18} img="https://plus.unsplash.com/premium_photo-1765792295978-3b24c12ab12e?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user='Binod Budha' age={38} img="https://plus.unsplash.com/premium_photo-1765390093374-695f6f14af7e?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App