import React from 'react';
import { FaUserFriends, FaBookOpen, FaHeart, FaAward } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container py-5">
     
      <div className="row align-items-center">
        
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="display-5 fw-bold">
            Transform Lives <span className="text-primary">Through</span> Education
          </h1>
          <p className="text-muted mt-3">
            We provide quality education to children in underserved communities and help build their bright future. Your support is our strength.
          </p>
          <div className="mt-4">
            <button className="btn btn-primary me-3">Become a Volunteer</button>
            <button className="btn btn-outline-warning">Learn More</button>
          </div>
        </div>

        
        <div className="col-lg-6 d-flex justify-content-center">
          <div
            className="bg-white p-3 rounded-4 shadow"
            style={{ transform: 'rotate(3deg)', maxWidth: '400px' }}
          >
            <img
              src="https://images.pexels.com/photos/8471823/pexels-photo-8471823.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Children learning"
              className="img-fluid rounded-3"
            />
            <p className="text-center mt-2 text-muted fw-semibold">
              Fulfilling every child's dream is our mission
            </p>
          </div>
        </div>
      </div>

     
      <div className="row text-center mt-5 gy-4">

        <div className="col-sm-6 col-lg-3">
          <div className="bg-white rounded-4 shadow-sm p-4 h-100">
            <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-2">
              <FaUserFriends className="text-primary fs-2" />
            </div>
            <h4 className="fw-bold fs-2">500+</h4>
            <p className="text-muted">Children Educated</p>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="bg-white rounded-4 shadow-sm p-4 h-100">
            <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex p-3 mb-2">
              <FaBookOpen className="text-warning fs-2" />
            </div>
            <h4 className="fw-bold fs-2">25+</h4>
            <p className="text-muted">Learning Centers</p>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 ">
          <div className="bg-white rounded-4 shadow-sm p-4 h-100">
            <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex p-3 mb-2">
              <FaHeart className="text-success fs-2" />
            </div>
            <h4 className="fw-bold fs-2">100+</h4>
            <p className="text-muted">Volunteers</p>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="bg-white rounded-4 shadow-sm p-4 h-100">
            <div className="bg-info bg-opacity-10 rounded-circle d-inline-flex p-3 mb-2">
              <FaAward className="text-info fs-2" />
            </div>
            <h4 className="fw-bold fs-2"> 5+</h4>
            <p className="text-muted">Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
