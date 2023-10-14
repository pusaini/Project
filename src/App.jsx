import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DarkAndLightMode from './Component/DarkAndLightMode'
import Calculator from './Component/Calculator'
import Header from './Component/Layout/Header';
import Home from './Component/Home';



function App() {


  return (
    <>

      <Router>
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="darkAndLightMode" element={<DarkAndLightMode />}></Route>
          <Route path="calculator" element={<Calculator />}></Route>



        </Routes >
      </Router >
    </>
  )
}

export default App
