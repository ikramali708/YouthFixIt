import logo from './logo.svg';
import "./Home.css"
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Home from './Home';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure the video element exists
    if (videoRef.current) {
      // Play the video
      videoRef.current.play().catch(error => {
        // Autoplay was prevented, handle the error here
        console.error('Autoplay prevented:', error);
      });

      // Add event listener for when the video ends
      videoRef.current.addEventListener('ended', () => {
        // Rewind the video to the beginning
        videoRef.current.currentTime = 0;
        // Play the video again
        videoRef.current.play().catch(error => {
          // Autoplay was prevented, handle the error here
          console.error('Autoplay prevented:', error);
        });
      });
    }
  }, []); // Empty dependency array ensures this effect runs only once after initial render











  const styles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 9999, // Ensure the spinner is on top of other content
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adjust the background color and opacity as needed
      backdropFilter: 'blur(1000px)', // Adjust the blur amount as needed
    },
    spinner: {
      marginBottom: '20px', // Adjust spacing between spinner and text
    },
  };





  const [isLoading,SetIsLoading]=useState(true);
  useEffect(() => {
  
    setTimeout(() => {
      SetIsLoading(false);
    }, 2000);
  }, []);











  return (

<div>


    <div className="main">
      {isLoading?
      <div style={styles.container}>
      <h1>Loading...</h1>
      <div style={styles.spinner}>
        <BallTriangle
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
    </div>

:
      






<div>


      <Header />
      {/* <div className="buttonContainer">
          <button className="customButton bg-dark">Donate Now</button>
        </div> */}
      <video ref={videoRef} autoPlay muted loop width="100%" height="100%" controlsList="nodownload" className="backgroundVideo">
        <source src="Back-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    <NavLink to="/donate">  <Button variant="primary" className='centered-button'>Donate Now</Button>{' '}
</NavLink>
      <div className="content">
        <section className="mission-section py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <h2>Our Mission</h2>
                <p>
                  At YouthFix, our mission is to bridge the gap between the privileged and the underprivileged by facilitating donations from students and individuals with the means to those in need. We aim to create a community where everyone has access to basic necessities and opportunities for a better life.
                </p>
              </div>
              <div className="col-lg-3 handimg">
                <img src="needy.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>



<div className="contaienr-fluid Why-section mt-3 mb-5">
  <div className="row roww">
    <div className="why">
      <h1>Why Donate to YouthFixIt</h1><hr />
    </div>
    <div className="ReasonParagraph">
      <p className='para ps-5'>
      By donating to YouthFixIt, you're not just offering financial support; you're providing sustenance and hope to those who need it most. Your contributions directly fund our efforts to distribute food and financial aid to those facing hardship, ensuring that no one in our community goes hungry or lacks essential resources. With your help, we can extend a helping hand to the needy, offering them not only nourishment for their bodies but also a glimmer of hope for a better tomorrow. Together, let's make a meaningful impact by uplifting those in need and building a more compassionate and equitable society
      </p>
    </div>
  </div>
</div>
















      <div className="container-fluid Services p-3">
        <div className="service mt-3">
          <h1>Our Services</h1>
        </div>

        <div className="row row-card">
          <div className="col-lg-2 col-md-6 col-12 card mb-3 ">
            <h3 className='text-center mt-1'>Food Assistance </h3><hr />
            <p>Our Food Assistance Program is dedicated to providing nourishment and hope to individuals and families facing food insecurity.With the support of our community, our Food Assistance Program strives to alleviate hunger and promote dignity for all, one meal at a time.</p>
          </div>
          <div className="col-lg-2 col-md-6 col-12 card mb-3">
            <h3 className='text-center mt-1'>Healthcare Initiatives</h3><hr />
            <p>Our Healthcare Initiatives aim to improve access to vital medical services and promote well-being for underserved communities.Through collaborative efforts and compassionate care, our Healthcare Initiatives strive to address health disparities and ensure quality healthcare for all.</p>
          </div>
          <div className="col-lg-2 col-md-6 col-12 card mb-3">
            <h3 className='text-center mt-1'>Resource Distribution</h3><hr />
            <p>Our Resource Distribution program ensures essential supplies reach those in need, fostering resilience and dignity in communities.
              Through strategic partnerships and efficient logistics, we empower individuals by providing access to vital resources for a better quality of life.</p>
          </div>
          <div className="col-lg-2 col-md-6 col-12 card">
            <h3 className='text-center mt-1'>Healthcare Initiatives</h3><hr />
            <p>Our Healthcare Initiatives prioritize accessibility and equity, striving to provide comprehensive healthcare solutions for all.
              Through innovative programs and compassionate care, we aim to bridge gaps in healthcare access, ensuring healthier futures for underserved communities</p>
          </div>
        </div>
      </div>



      <Footer />

    </div>
      }</div>
</div>
    
  );
}

export default App;
