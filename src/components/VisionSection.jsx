import React from 'react';

const VisionSection = () => {
  return (
    <div
      className="py-5 text-white d-flex justify-content-center"
      style={{
        background: 'linear-gradient(to right, #2563eb, #f97316)',
        borderRadius: '25px',
      }}
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">Our Vision</h2>
          <p className="mt-2">
            "A society where every child gets the right to education and can realize their dreams."
          </p>
        </div>

        <div className="row justify-content-center g-3 px-4">
         
          <div className="col-md-4 col-sm-6">
            <div
              className="p-3 text-center h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
              }}
            >
              <h5 className="fw-bold">Equality</h5>
              <p className="mb-0">Equal opportunities for all children</p>
            </div>
          </div>

          
          <div className="col-md-4 col-sm-6">
            <div
              className="p-3 text-center h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
              }}
            >
              <h5 className="fw-bold">Quality</h5>
              <p className="mb-0">High quality education</p>
            </div>
          </div>

          
          <div className="col-md-4 col-sm-6">
            <div
              className="p-3 text-center h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
              }}
            >
              <h5 className="fw-bold">Empowerment</h5>
              <p className="mb-0">Holistic development of children</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
