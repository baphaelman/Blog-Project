import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const pageName = {
    home: "Home",
    about: "About",
    contact: "Contact",
  };

  const contactSectionStyle = {
    color: 'white',
    margin: '0 auto',
    maxWidth: '800px',
    padding: '20px',
  };

  const flexBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'pink', 
    padding: '20px',
    margin: '10px 20px',
    borderRadius: '10px',
    border: '5px solid white',
  };


  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div style={{ margin: '20px' }}>
      <header id="header">
        <nav className="scroll-menu">
          <button className="scroll-menu-button">
            <p style={{ fontFamily: 'Cedarville Cursive' }}>Winer</p>
          </button>
        </nav>
        <nav>
          <Link to="/">{pageName.home}</Link>
          <Link to="/about">{pageName.about}</Link>
          <Link to="/contact">{pageName.contact}</Link>
        </nav>
      </header>
      <div className="blog-header">
        <h1 style={{ fontFamily: 'Cedarville Cursive', color: 'white' }}>Winer</h1>
        <h2 style={{ fontFamily: 'Cedarville Cursive', color: 'white' }}>
          Enjoying the Finest Flavor with Every Sip
        </h2>
      </div>
      <div style={contactSectionStyle}>
        <div style={flexBoxStyle}>
          <h2>Contact Us</h2>
          <p>
            
            We'd love to hear from you! Let us know if you have any questions, comments, or suggestions, or just want to reach out!
          </p>
        </div>
        <div style={flexBoxStyle}>
          <h3>Send Us a Message</h3>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" />
            </div>
            <button type="submit">Submit</button>
          </form>
          {isSubmitted && (
            <p style={{ color: 'green' }}>Thank you! We have received your message.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
