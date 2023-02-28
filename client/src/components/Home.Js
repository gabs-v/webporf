import React from 'react'
import { Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <nav>
                <h3>Gaby <br/> Vazquez</h3>
                <ul>
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
            <h1>Hi, Gaby Vazquez</h1>
            <h2>Full-Stack Software Engineer</h2>
        </div>
    )
}

export default Home