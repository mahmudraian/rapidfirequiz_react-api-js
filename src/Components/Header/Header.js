import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-main'>
          <nav className='header'>
          <NavLink className={({isActive})=> isActive ? 'active' : undefined} to='home'>Home</NavLink>
          <Link to='blog'>Blog</Link>
          <Link to='statistics'>Statistics</Link>
          </nav>
        </div>
    );
};

export default Header;