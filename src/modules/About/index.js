import React from 'react'
import { NavLink } from 'react-router-dom'

const AboutPage = () => {
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
      <h1>About Us</h1>
      <div style={sectionStyle}>
        <p>Welcome to our about page! Here, you can learn more about our company or organization.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget urna vestibulum, blandit elit at, tristique justo. Nullam vel libero quis mauris tincidunt feugiat vel vel neque.</p>

        <p>Donec ac tellus vel libero fermentum tempor eu a justo. Suspendisse tincidunt, mi vel tristique scelerisque, nunc orci blandit risus, eget luctus turpis metus nec sapien. Integer non dapibus lectus.</p>


      </div>

    </div>
  );
};

export default AboutPage;

