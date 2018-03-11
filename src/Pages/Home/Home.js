import React from 'react';
import PropTypes from 'prop-types';
import AirplaneListing from '../../Components/AirplaneListing/AirplaneListing';
import IntroSection from '../../Components/IntroSection/IntroSection';

const Home = (props) => {
  return (
    <div>
      <IntroSection />
      {
        (props.airTraffic.acList) ? (
          <AirplaneListing {...props} />
        ) : ''
      }
    </div>
  );
};

const airTrafficPropType = PropTypes.shape({
  acList: PropTypes.arrayOf(PropTypes.shape({
    Id: PropTypes.number.isRequired,
    Alt: PropTypes.number,
    Icao: PropTypes.string.isRequired,
    Op: PropTypes.string,
  })),
});

Home.propTypes = {
  airTraffic: airTrafficPropType.isRequired,
};

export default Home;
