import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 mt-5 border-top">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="text-primary fw-bold">Basti ki Pathshala</h5>
            <p className="text-muted">
              We provide quality education to children in underserved communities and empower them to build a better future.
            </p>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-decoration-none text-white">Home</a></li>
              <li><a href="#about" className="text-decoration-none text-white">About</a></li>
              <li><a href="#visionsection" className="text-decoration-none text-white">Vision</a></li>
              <li><a href="#volunteer" className="text-decoration-none text-white">Volunteer</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold">Our Programs</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-white">Basic Literacy</a></li>
              <li><a href="#" className="text-decoration-none text-white">Skill Development</a></li>
              <li><a href="#" className="text-decoration-none text-white">Child Mentorship</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold">Contact Us</h6>
            <p className="mb-1 text-white">Email: bastikipathshala@example.com</p>
            <p className="mb-1 text-white">Phone: +91xxxxxxxxx</p>
            <p className="mb-0 text-white">Location: Basti, Uttar Pradesh, India</p>
          </div>
        </div>

        <div className="text-center mt-4 pt-3 border-top">
          <p className="mb-0 text-white">
            © {new Date().getFullYear()} <strong>Basti ki Pathshala</strong> | Developed by <span className="text-primary fw-semibold">Ojasvi Rastogi</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
