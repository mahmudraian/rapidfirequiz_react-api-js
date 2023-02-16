import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <nav>
          <Link to='home'>Home</Link>
          <Link to='blog'>Blog</Link>
          <Link to='statistics'>Statistics</Link>
          </nav>
        </div>
    );
};

export default Header;