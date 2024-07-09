import React from 'react';
import './ContactUs.css'; // Import the CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-us-section">
      <section className="contact-background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section-title">Contact Us</h2>
              <div className="contact-details">
                <div className="contact-person">
                  <h3 className="person-name">Prof. Aditya Trivedi</h3>
                  <p className="person-role">General Chair</p>
                  <p className="person-info"><a href="#">Details</a></p>
                </div>
                <div className="contact-person">
                  <h3 className="person-name">Dr. Rahul Kala</h3>
                  <p className="person-role">General Chair</p>
                  <p className="person-info"><a href="#">Details</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
