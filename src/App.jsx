import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DarkAndLightMode from './Component/DarkAndLightMode'
import Calculator from './Component/Calculator'
import Header from './Component/Layout/Header';
import Home from './Component/Home';
import Carousel from './Component/Carousel';
import ImageImport from './Component/ImageImport';
import Project from './Component/Projects/Project';
import MovieSearching from './Component/MovieSearching/MovieSearching';
import RockPaperScissors from './Component/Game/RockPaperScissors';
import ColorChange from './Component/ColorChange/ColorChange';



function App() {


  return (
    <>

      <Router>
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="project" element={<Project/>}></Route>
          <Route path="calculator" element={<Calculator />}></Route>
          <Route path="carousel" element={<Carousel />}></Route>
          <Route path="imageImport" element={<ImageImport />}></Route>
          <Route path="darkAndLightMode" element={<DarkAndLightMode />}></Route>
          <Route path="movieSearching" element={<MovieSearching />}></Route>
          <Route path="rockPaperScissors" element={<RockPaperScissors />}></Route>
          <Route path="colorChange" element={< ColorChange/>}></Route>

        </Routes >
      </Router >
    </>
  )
}

export default App
