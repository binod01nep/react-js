import Home from './Pages/Home.jsx'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar.jsx'
import Product from './Pages/Product.jsx'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/product' element={<Product />}/>
      </Routes>
    </div>
  )
}

export default App