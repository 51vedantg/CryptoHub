import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Coin from './Pages/Coin/Coin'

import Blog from './Components/Blog/Blog'
import Price from './Components/Price/Price'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin/:coinId' element={<Coin/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/price' element={<Price/>} />
      </Routes> 
    </div>
  )
}

export default App
