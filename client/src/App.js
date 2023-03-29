import React from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './static/Home.css'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={ <Projects />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
