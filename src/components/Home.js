import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Mateusz Stanczak</h1>
            <p>I'm a software developer with fresh ideas and motivation to execute them.</p>
            <Link to='/portfolio'>Dive deeper --></Link>
        </div>
    )

}

export default Home;