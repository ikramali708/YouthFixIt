import Header from './Header';
import Footer from './Footer';
import './Contact.css';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation
    if (formData.name && formData.email && formData.mobile && formData.city && formData.message) {
      try {
        const response = await fetch('https://formspree.io/f/xleqwblq', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          alert('Form submitted successfully!');
          setFormData({
            name: '',
            email: '',
            mobile: '',
            city: '',
            message: ''
          });
        } else {
          alert('Failed to submit form. Please try again later.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit form. Please try again later.');
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="main">
      <Header />
    <div className="contact-content mt-5 mb-5">
    <h1 className='mt-3'>Contact us</h1>

<div className="container mb-3">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile No:</label>
          <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} className="form-control" placeholder="Enter your mobile number" required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="form-control" placeholder="Enter your city" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-control" rows="5" placeholder="Enter your message" required></textarea>
        </div>
        <div className="btn-container text-center mt-3">
          <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </div>

      </form>
    </div>
  </div>
</div>
    </div>
      <Footer />
    </div>
  );
}

export default Contact;
