import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div className="navbar navbar-expand-md bg-light p-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">

       
        <h1 className="m-0">
          <span className="text-primary">Basti ki Pathshala</span>
        </h1>

       
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <nav className="navbar-nav ms-auto d-flex align-items-center gap-3">
            <Link
              to="home"
              className="nav-link text-dark"
              spy
              smooth
              duration={200}
              style={{ cursor: 'pointer' }}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="about"
              className="nav-link text-dark"
              spy
              smooth
              duration={200}
              style={{ cursor: 'pointer' }}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="visionsection"
              className="nav-link text-dark"
              spy
              smooth
              duration={200}
              style={{ cursor: 'pointer' }}
              onClick={() => setIsOpen(false)}
            >
              VisionSection
            </Link>
            <Link
              to="volunteer"
              className="nav-link text-dark"
              spy
              smooth
              duration={200}
              style={{ cursor: 'pointer' }}
              onClick={() => setIsOpen(false)}
            >
              Volunteer
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
