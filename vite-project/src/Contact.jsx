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
    padding: '20px',
    margin: '10px 20px',
    borderRadius: '10px',
    border: '5px solid white',
  };

  const contactButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px',
    margin: '10px 20px',
    borderRadius: '20px',
    border: '5px solid white',
    fontSize: '2vw',
    width: '225px'
  };

  return (
    <div style={{ margin: '0' }}>
      <header id="header">
        <nav className="scroll-menu">
          <button className="scroll-menu-button">
            <p>Winer</p>
          </button>
        </nav>
      </header>
      <body>
      <nav>
          <Link to="/">{pageName.home}</Link>
          <Link to="/about">{pageName.about}</Link>
          <Link to="/contact">{pageName.contact}</Link>
        </nav>
      <div className="blog-header">
        <h1 style={{ fontFamily: 'Cedarville Cursive', color: 'white' }}>Winer</h1>
        <h2 style={{ fontFamily: 'Cedarville Cursive', color: 'white' }}>
          Enjoying the Finest Flavor with Every Sip
        </h2>
      </div>
      <div style={contactSectionStyle} className="contact-section">
        <div className="contact-box" style={flexBoxStyle}>
          <h2>Contact Us</h2>
          <p>
            We'd love to hear from you! Let us know if you have any questions, comments, or suggestions, or just want to reach out!
          </p>
        </div>
        <div className="contact-box" style={contactButtonStyle}>
          <a  id="contact-button" href={`mailto:winersunited@gmail.com`}>Send us a message!</a>
        </div>

      </div>
      </body>
    </div>
  );
}

export default Contact;
