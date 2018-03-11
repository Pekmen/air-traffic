import React from 'react';
import PropTypes from 'prop-types';
import AirplaneListing from '../../Components/AirplaneListing/AirplaneListing';

const Home = (props) => {
  return (
    (props.airTraffic.acList) ? (
      <AirplaneListing {...props} />
    ) : ''
  );
};

const airTrafficPropType = PropTypes.shape({
  acList: PropTypes.arrayOf(PropTypes.shape({
    Id: PropTypes.number.isRequired,
    Alt: PropTypes.number.isRequired,
    Call: PropTypes.string.isRequired,
    Op: PropTypes.string.isRequired,
  })),
});

Home.propTypes = {
  airTraffic: airTrafficPropType.isRequired,
};

export default Home;
