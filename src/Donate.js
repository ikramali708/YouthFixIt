import Footer from "./Footer";
import Header from './Header'
import './Donate.css'
import { Button } from "react-bootstrap";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";

function Donate() {
  const ScrollToTop =()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    }

    );
  }
    return (
        <div className="main">
            <Header />
            <div className="container-fluid m-3 ms-5">
                <div className="row">
                    <div className="col-lg-8 col-12 mt-4">
                        <h1 style={{color:'#001F3F'}}>
                            Donate Now
                        </h1>
                        <p className="pt-3">
                            Your donation has the power to transform lives. By contributing to our cause, you're not just giving money – you're giving hope, opportunity, and a chance for a brighter future. Every dollar you donate goes directly towards supporting our programs and initiatives, whether it's providing essential resources to those in need, funding groundbreaking research, or empowering individuals to achieve their dreams. Together, we can make a real difference in the world and create positive change that lasts for generations to come. Join us in our mission and donate now to be a part of something truly meaningful.
                        </p>
                    </div>
                    <div className="col-lg-4 col-12">
                        <img src="donate-img.png" alt="donation-img" className="donation-img" />
                    </div>
                </div>
            </div>
            <div className="row method-row">
                <div className="col-lg-4">
                 <div className="div">
                 <img src="easypaisa.png" alt="" className="method-logo"/> 
                 <br /><br /> <h5>EasyPaisa:0300-1234708</h5>
                 </div>
                </div>
                <div className="col-lg-4">
                <img src="jaz-logo.png" alt="" className="method-logo"/>  <br /><br />  
                    <h5>JazzCash:0300-1234708</h5>
                </div>
                <div className="col-lg-4">
                <img src="bank.png" alt="" className="method-logo"/> <br /><br />  
                    <h5>Bank Account:0300-1234708</h5>
                </div>
             
            </div>
            <div className="other-way-btn">
           
            <NavLink to="/contact" onClick={ScrollToTop}> <Button to="/contact">Another Way</Button></NavLink>

            </div>
            <Footer />
        </div>
    )
}
export default Donate;