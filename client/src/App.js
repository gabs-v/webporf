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
    <nav>
      <ul>
        <li className='current'>
            <Link to='/'> Home </Link>
        </li>
        <li>
            <Link to='/about'> About </Link>
        </li>
        <li>
            <Link to='/projects'> Projects </Link>
        </li>
        <li>
            <Link to='/contact'> Contact </Link>
        </li>
      </ul>
    </nav>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<About/>} />
        <Route path='/' element={ <Projects />} />
        <Route path='/' element={<Contact/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
