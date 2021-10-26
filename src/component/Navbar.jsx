import React from 'react';
import { FaSearch } from "react-icons/fa";

import vector from '../lib/Vector.png';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <div className="logo"><img class="logo-img" src={vector} alt="logo"/></div>
                <div className="nav-icons">
                    <div className="search-icon"><FaSearch/></div>
                    <div class="menu-icon">
                        <span className="menu-icon_1"></span>
                        <span className="menu-icon_2"></span>
                        <span className="menu-icon_3"></span>
                    </div>
                </div>

            </div>
            

        </nav>
    )
}

export default Navbar
