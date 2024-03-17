import React from 'react';
import './Footer.css'
import { NavLink } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });}
  return (
    <footer className=" text-white py-4 foooter">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About YouthFixIt</h5>
            <p>YouthFixIt is a non-profit organization dedicated to helping the needy by collecting donations from students and wealthy individuals and distributing them to those in need.</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
            <NavLink to="/" className="footer-link" onClick={scrollToTop} >Home</NavLink><br />
            <NavLink to="/about" className="footer-link" onClick={scrollToTop}>About Us</NavLink><br />
            <NavLink to="/donate" className="footer-link" onClick={scrollToTop}>Donate</NavLink> <br />
            <NavLink to="/contact"  className="footer-link" onClick={scrollToTop}>Contact us</NavLink> <br />
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <address>
              123 Charity Street<br />
              City, State ZIP<br />
              Phone: (123) 456-7890<br />
              Email: info@youthfixit.org
            </address>
          </div>
        </div>
       
      </div>
      <div className="row mt-3 ">
          <div className="col-12 text-center">
            <p>&copy; 2024 YouthFixIt. All rights reserved.</p>
            <p>Powered by Ikram Ali</p>
          </div>
        </div>
       
    </footer>
  );
}

export default Footer;
