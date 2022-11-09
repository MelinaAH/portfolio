import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className='navbar-component'>
                <div className='navbar-links'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                    </ul>
                </div>
                <div className='navbar-links'>
                    <ul>
                        <li>
                            <Link to='/aboutme'>About me</Link>
                        </li>
                    </ul>
                </div>
                <div className='navbar-links'>
                    <ul>
                        <li>
                            <Link to='/myworks'>My works</Link>
                        </li>
                    </ul>
                </div>
                <div className='navbar-links'>
                    <ul>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
