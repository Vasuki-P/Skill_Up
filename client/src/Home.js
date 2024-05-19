import React from 'react';
import {Link } from 'react-router-dom';
import './Home .css';


function App() {
  return (
    <div className="home">

      <header>
        <div className="logo">
          <img src="path/to/logo.png" alt="Logo" />
        </div>
        <div className="contact-info">
          <span>+91-9008013304</span>
          <span>info@meeraq.com</span>
        </div>
        <div className="enquire-btn">
        <Link to="/signup">
            <button>Login/ Signup</button>
          </Link>
        </div>
      </header>

      <main>
        <section className="hero-section">
        <div className="hero-text">
          <h1>Curate Impactful | Sustainable | Scalable</h1>
          <h2>Learning Experiences for your people</h2>
        </div>
        <div className="icons">
          <div className="icon">Icon 1</div>
          <div className="icon">Icon 2</div>
          <div className="icon">Icon 3</div>
        </div>
        <div className="leadership-programs">
          <h3>Leadership Programs</h3>
          <ul>
            <li>Custom 3 to 12-month Leadership Development Programs</li>
            <li>For Second in-line Leaders</li>
            <li>Women Leaders</li>
            <li>Hi-Pot talent</li>
          </ul>
        </div>
      </section>
          <div className="form-container">
            <h2>Get a Free Consultation Today</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="+91" required />
              <input type="text" placeholder="Company" required />
              <textarea placeholder="Your Message" required></textarea>
              <label>
                <input type="checkbox" />
                Yes, you would like to receive regular updates on thought...
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
      </main>

      <section className="stats">
        <div className="stat-item">
          <h3>100+</h3>
          <p>Businesses Served</p>
        </div>
        <div className="stat-item">
          <h3>5,000+</h3>
          <p>Executives Coached</p>
        </div>
        <div className="stat-item">
          <h3>4.9 / 5</h3>
          <p>Rating on Coaching</p>
        </div>
        <div className="stat-item">
          <h3>5,000+</h3>
          <p>Professionals Trained</p>
        </div>
        <div className="stat-item">
          <h3>70+</h3>
          <p>Learner NPS</p>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <p>Help them unlock their potential to communicate effectively, lead successfully, collaborate seamlessly, and power business growth</p>
        <div className="service-cards">
          <div className="service-card">
            <h3>Corporate Training</h3>
            <p>100+ Behavioral Skills, Functional Skills, and DEI Trainings</p>
            <p>Junior | Mid-level | Senior talent</p>
            <button>Login</button>
          </div>
          <div className="service-card">
            <h3>Leadership Programs</h3>
            <p>Custom LDPs with a variety of carefully chosen components</p>
            <p>High Potential Managers | Women Talent | Second in-line Leaders</p>
            <button>Login</button>
          </div>
          <div className="service-card">
            <h3>Corporate Coaching</h3>
            <p>1:1 Coaching, Group Coaching, Team Coaching, On-Demand</p>
            <p>Founders | CXOs | Senior Leaders | High-Potential Managers</p>
            <button>Login</button>
          </div>
          <div className="service-card">
            <h3>Coaching Culture</h3>
            <p>Internal Coach, Performance Coach, Manager as a Coach, and Mentoring Certification Programs</p>
            <p>Senior Leaders | HR Managers | People Leaders</p>
            <button>Login</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
