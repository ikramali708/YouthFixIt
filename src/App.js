import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Home from './Home';
import Donate from './Donate';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import SpinnerLoader from './Spiner-load';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) { // Adjust the scroll threshold as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <SpinnerLoader />
      ) : (
        <div className='Appp'>
          <a
            href="https://api.whatsapp.com/send?phone=923166153752"
            className="whatsapp-button"
            style={{
              position: 'fixed',
              bottom: '20px',
              left: '20px',
              zIndex: '1000',
              backgroundColor: '#25d366',
              color: '#fff',
              padding: '10px',
              borderRadius: '30%',
              textDecoration: 'none',
            }}
          >
            <i className="fab fa-whatsapp whatsapp-icon" style={{ fontSize: '30px' }}></i>
          </a>
          {isVisible ? (
              <><i className="fas fa-arrow-up"></i><a
                className="whatsapp-button"
                style={{
                  position: 'fixed',
                  bottom: '20px',
                  right: '20px',
                  zIndex: '1000',
                  backgroundColor: '#25d366',
                  color: '#fff',
                  padding: '5px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  borderRadius: '30%',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
                onClick={ScrollToTop}
              >
<i className="fas fa-arrow-up"></i>

              </a></> ) :(
                isVisible == true

              )}

          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/donate' element={<Donate />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
