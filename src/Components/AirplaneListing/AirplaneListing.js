import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import AirplaneCard from '../AirplaneCard/AirplaneCard';


const AirplaneListing = (props) => {
  return (
    <section>
      <ListGroup>
        {props.airTraffic.acList.map((airplane) => {
          return <AirplaneCard key={airplane.Id} airplane={airplane} />;
          })
        }
      </ListGroup>
    </section>
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

AirplaneListing.propTypes = {
  airTraffic: airTrafficPropType.isRequired,
};

export default AirplaneListing;
