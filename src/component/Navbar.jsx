import React from 'react';
import { FaSearch } from "react-icons/fa";

import vector from '../lib/Vector.png';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-top">
                <ul className='nav-top-list'>
                    <li className='nav-top-item'>Contact </li>
                    <li className='nav-top-item'>Support us</li>
                    <li className='nav-top-item'>Sign in</li>
                </ul>
                <button type='button'className=' color-nav'>Join Us</button>
            </div>
            <div className="navbar">
                <div className="logo"><img class="logo-img" src={vector} alt="logo"/></div>
                <div className="nav-icons">
                    <div className="search-icon"><FaSearch /></div>
                   
                    <div class="menu-icon">
                        <span className="menu-icon_1"></span>
                        <span className="menu-icon_2"></span>
                        <span className="menu-icon_3"></span>
                    </div>
                </div>
                 <div className="nav-buttom">
                        <ul className='nav-bottom-list'>
                            <li className='nav-bottom-item'>About</li>
                            <li className='nav-bottom-item'>News and resources</li>
                            <li className='nav-bottom-item'>Events and programs</li>
                            <li className='nav-bottom-item'>Projects and partnerships</li>
                            <li className='nav-bottom-item'>Membership</li>
                            <li className='nav-bottom-item'>Research and policy</li>
                        </ul>
                    </div>

            </div>
            

        </nav>
    )
}

export default Navbar
