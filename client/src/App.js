import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <nav>
        <h3>Gaby <br/> Vazquez</h3>
          <ul>
            <li>
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
