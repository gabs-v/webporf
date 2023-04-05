import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'



const Main = () => {
  return (
    <div>
        {<Navbar/>}
        <content>
            {/* {<Home/>}
            {<About/>}
            {<Projects/>}
            {<Contact/>} */}
        </content>
    </div>
  )
}

export default Main