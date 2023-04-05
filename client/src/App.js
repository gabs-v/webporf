import React from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Main from './view/Main';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
