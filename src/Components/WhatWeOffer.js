import React from 'react';
 // You will define your styles in this file

const WhatWeOffer = () => {
  return (
    <section className="what-we-offer">
      <h2>What We Offer</h2>
      <div className="offer-container">
        <div className="offer-card">
          <i className="fas fa-users offer-icon"></i> {/* Replace with the icon you need */}
          <h3>Reliable Manpower Supply</h3>
          <p>
            We assure a reliable manpower supply for all sectors that require general and technical staffing.
          </p>
        </div>
        <div className="offer-card">
          <i className="fas fa-clock offer-icon"></i>
          <h3>On Time Service</h3>
          <p>
            Our expertise allows us to supply your manpower requirement efficiently, with no downtime.
          </p>
        </div>
        <div className="offer-card">
          <i className="fas fa-coins offer-icon"></i>
          <h3>Negotiable Rates</h3>
          <p>
            We have the most competitive rates in the industry, with negotiable hourly or monthly rates.
          </p>
        </div>
        <div className="offer-card">
          <i className="fas fa-arrows-alt-h offer-icon"></i> {/* Replace with appropriate icon */}
          <h3>Flexible Contracts</h3>
          <p>
            We provide teams or individuals according to your manpower requirements on a short or long-term basis.
          </p>
        </div>
        <div className="offer-card">
          <i className="fas fa-industry offer-icon"></i> {/* Replace with appropriate icon */}
          <h3>Industry Expertise</h3>
          <p>
            With more than 15 years of expertise in manpower supply services in the UAE, we have the know-how to understand the manpower requirements of every business.
          </p>
        </div>
        <div className="offer-card">
          <i className="fas fa-shield-alt offer-icon"></i> {/* Replace with appropriate icon */}
          <h3>Health and Safety</h3>
          <p>
            All our personnel are trained to meet occupational safety standards and contribute to a zero-harm workplace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
