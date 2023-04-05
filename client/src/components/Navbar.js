import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
 

    // maybe try to have the links go to the components within the main?? 
    // Smooth Scrolling Navbar Transition in ReactJS

  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/'> About </Link>
                </li>
                <li>
                    <Link to='/'> Projects </Link>
                </li>
                <li>
                    <Link to='/'> Contact </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar