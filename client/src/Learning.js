import React from 'react';
import { Link } from 'react-scroll';
import './Learning.css';
import Companies from './Companies'; // Assuming Companies is a component you've created
import About from './About'; // Assuming About is a component you've created
import Contact from './Contact'; // Assuming Contact is a component you've created

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className='homepage'>
        <nav className="navbar">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <ul className="nav-links">
            <li><Link to="homepage" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="companies" smooth={true} duration={500}>Companies</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About Us</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
      <section id="companies" className="section companies">
        <Companies />
      </section>
      
      <section id="about" className="section about">
        <About />
      </section>
      
      <section id="contact" className="section contact">
        <Contact />
      </section>
      
    </div>
  );
};

export default Homepage;
