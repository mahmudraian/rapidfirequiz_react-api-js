import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <nav className='header'>
          <Link to='home'>Home</Link>
          <Link to='blog'>Blog</Link>
          <Link to='statistics'>Statistics</Link>
          </nav>
        </div>
    );
};

export default Header;