import Header from './Header'
import Footer from './Footer';
import './About.css'
function About() {
    return (
        <div className="main">
            <Header /><br /><br />
            <h1 className='mt-3'> About us</h1>
            <div className="paragraph mt-1 mb-3 S">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mt-5">
                            <p>  <p>At YouthFixit, we are driven by a vision of a world where every individual has the opportunity to reach their full potential. Our organization was born out of a deep-rooted commitment to addressing social inequality and empowering marginalized communities. Through dedicated volunteers and strategic partnerships, we work tirelessly to provide essential services and support to those in need. Whether it's through educational initiatives, healthcare programs, or community development projects, we are committed to making a tangible difference in the lives of individuals and families across the globe. Join us in our journey towards a more equitable and inclusive society, where every person has the chance to thrive and succeed</p></p>
                        </div>
                        <div className="col-lg-4 ">
                            <img src="youthLogoSmall.png" alt="" className='img-about mb-5' />
                        </div>
                    </div>
                </div>
            </div>











            <Footer />

        </div>
    )
}
export default About;