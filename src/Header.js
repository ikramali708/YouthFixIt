import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
        <div className="container">
          <div className="navbar-logo">
            <a href="/">
              <img src="youthLogoSmall.png" alt="Website Logo" />
            </a>
          </div>
          <ul className="navbar-left">
            <li className="nav-item">
              <NavLink to="/" className='nav-link'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/donate" className='nav-link'>Donate</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className='nav-link'>About us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className='nav-link'>Contact us</NavLink>
            </li>

          </ul>
          <button className="sidebar-toggle-button" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {isSidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-header">
            <button className="sidebar-close-button" onClick={closeSidebar}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <ul className='mt-3'>
            <li>
              <Link to="/" className='Small-nav-link'>Home</Link>
            </li>
            <li>
              <Link to="/donate" className='Small-nav-link'>Donate</Link>
            </li>
            <li>
              <Link to="/contact" className='Small-nav-link'>Contact us</Link>
            </li>
            <li>
              <Link to="/about" className='Small-nav-link'>About us</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
