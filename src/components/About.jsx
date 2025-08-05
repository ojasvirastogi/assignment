import React from "react";
import { FaBookOpen, FaUserFriends, FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <div className="container py-5" id="about">
      <div className="text-center mb-4">
        <h2 className="fw-bold">About Us</h2>
        <p className="text-muted">
          Basti Ki Pathshala is a non-profit organization that works to connect
          children from disadvantaged sections of society to mainstream
          education.
        </p>
      </div>

      <div className="row align-items-start g-5">
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Our Mission</h3>
          <p className="text-muted">
            Our goal is to provide quality education to every child, regardless
            of their social or economic background. We believe that education is
            the medium that can bring positive change in society.
          </p>

          <div className="mt-4 d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-2">
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: "40px", height: "40px" }}
              >
                <FaBookOpen className="text-white fs-5" />
              </div>
              <span>Quality Primary Education</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div
                className="bg-warning d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: "40px", height: "40px" }}
              >
                <FaUserFriends className="text-white fs-5" />
              </div>
              <span>Personality Development Programs</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div
                className="bg-success d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: "50px", height: "50px" }}
              >
                <FaHeart className="text-white fs-5" />
              </div>
              <span>Health and Nutrition Support</span>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="rounded-4 overflow-hidden shadow-sm mb-4">
            <img
              src="https://images.pexels.com/photos/8471821/pexels-photo-8471821.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Girl in class"
              className="img-fluid w-100"
            />
          </div>

          <div className="bg-warning bg-opacity-10 p-4 rounded-4 shadow-sm">
            <h5 className="fw-bold mb-2">Our Achievements</h5>
            <p className="text-muted mb-0">
              In the last 5 years, we have educated 500+ children and 80% of
              children are now part of mainstream education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
