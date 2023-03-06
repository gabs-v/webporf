import React from 'react'
import { Link } from 'react-router-dom'
import '../static/Navbar.css'

const Navbar = () => {
    return (
        <nav className=''>
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
    )
}

export default Navbar