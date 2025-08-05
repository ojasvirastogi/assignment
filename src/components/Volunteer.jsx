import React from "react";

const Volunteer = () => {
  return (
    <div id="volunteer" className="py-5 bg-light">
      <div className="container bg-white rounded shadow p-5">
        <div className="text-center mb-4">
          <h1>Become a Volunteer</h1>
          <p>Your small help can change a child's life. Join us and become part of social service.</p>
        </div>

        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="fullName" className="form-label">
              Full Name *
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">
              Phone Number *
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="+91xxxxxxx"
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="availability" className="form-label">
              Availability *
            </label>
            <select
              className="form-select"
              id="availability"
              name="availability"
              required
            >
              <option value="">Select</option>
              <option value="Weekdays">Weekdays</option>
              <option value="Weekends">Weekends</option>
              <option value="Anytime">Anytime</option>
            </select>
          </div>

          <div className="col-12">
            <label htmlFor="skills" className="form-label">
              Skills and Qualifications
            </label>
            <input
              type="text"
              className="form-control"
              id="skills"
              name="skills"
              placeholder="e.g., Teaching, Arts, Music, Sports, etc."
            />
          </div>

          <div className="col-12">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              placeholder="Why do you want to join us?"
              rows="3"
            ></textarea>
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary px-4">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
