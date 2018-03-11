import React from 'react';
import './IntroSection.css';

const IntroSection = () => {
  return (
    <section className="intro-section">
      <h1>Welcome to Air Traffic Test application</h1>
      <p>Down below you can see table with all aircraft in the 80km radius around you</p>
      <p>You can click on particular airplane and explore additional info about it.</p>
    </section>
  );
};

export default IntroSection;
