import React from 'react'

const ContactPage = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    textAlign: 'center',
  };

  const sectionStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  };

  const footerStyle = {
    marginTop: '20px',
    fontSize: '0.8em',
  };

  return (
    <div style={containerStyle}>
      <h1>Contact Us</h1>
      <div style={sectionStyle}>
        <p>Welcome to our Contact page!</p>

        <p>At the moment you only can contact us via email</p>


      </div>
      <footer style={footerStyle}>
        <p>Contact us at: <a href="mailto:irakli.chkhenkeli.1@btu.edu.ge">irakli.chkhenkeli.1@btu.edu.ge</a></p>
      </footer>
    </div>
  );
};

export default ContactPage;

