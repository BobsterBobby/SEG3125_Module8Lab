import React from 'react'
import { NavLink } from 'react-router-dom'
import HomePic from '../img/Logo-removebg-preview.png';

const Navbar=()=>{
    return(
        <nav className="nav-wrapper blue darken-2">
            <div className="container">
                <a className="brand-logo"><img src={HomePic} width="50" height="30" class="center"></img><NavLink to="/">ElectroLife</NavLink></a>
                
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar