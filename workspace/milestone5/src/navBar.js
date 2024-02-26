import React from 'react';
import { Link } from 'react-router-dom';
import './app.css'
import 'bootstrap'

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <span className='navbar-brand'>
                <h1>Biblical Bestiary</h1>
            </span>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-links'>
                    <span className='navbar-link'>
                        <Link to='/'>Bestiary List</Link>
                    </span>
                    <span className='navbar-link'>
                        <Link to='/new'>Add A Creature</Link>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;