import React from 'react'
import { Link } from 'react-router-dom'
import '../static/Home.css'
import me from '../static/img/me.JPEG' 

const Home = () => {
    return (
        <div>
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
            <div className='mainContainer'>
                <h1>Hi, Gaby Vazquez</h1>
                <h2>Full-Stack Software Engineer </h2>
            </div>
        </div>
    )
}

export default Home