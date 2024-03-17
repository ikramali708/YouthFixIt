import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        {/* Right side */}
        <div className="navbar-logo">
          <a href="/">
            <img src="youthLogoSmall.png" alt="Website Logo" />
          </a>
        </div>
        {/* Left side */}
        <ul className="navbar-left">
          <li className="nav-item">
            <NavLink to="/" className='nav-link'>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/donate" className='nav-link'>Donate</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className='nav-link'>Contact us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className='nav-link'>About us</NavLink>
          </li>


        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
