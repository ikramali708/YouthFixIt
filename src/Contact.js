import Header from './Header'
import Footer from './Footer';
import './Contact.css'
import { useState } from 'react';
function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation
        if (formData.name && formData.email && formData.message) {
          // Submit form data (e.g., send it to a backend server)
          console.log('Form submitted:', formData);
        } else {
          alert('Please fill in all fields');
        }
      };
    return(
        <div className="main">
            <Header/>
           <h1>Contact US</h1>
       

           <div className="container mb-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="contact-form " onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-control" rows="5" required></textarea>
            </div>
           <div className="btn">
           <button type="submit" className="btn btn-primary mt-2 text-center ">Submit</button>
           </div>
          </form>
        </div>
      </div>
    </div>
            <Footer/>
        </div>
    )
}
export default Contact;