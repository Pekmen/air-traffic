import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


/* Component for showing airplane info data:
   Manufacturer, Model, Flight Origin and Destination
*/
const AirplaneInfo = (props) => {
  const {
    Man, Mdl, From, To,
  } = { ...props.airplane };

  return (
    <div className="airplane-info">
      <Row>
        <Col md={4}>
          <img src={`https://logo-core.clearbit.com/${Man}.com?size=250`} alt={`${Man} logo`} />
        </Col>
        <Col md={4}>
          <h1>{Man}</h1>
          <h2>{Mdl}</h2>
        </Col>
        <Col md={4}>
          <p>From: {From}</p>
          <p>To: {To}</p>
        </Col>
      </Row>
    </div>
  );
};

const airplanePropType = PropTypes.shape({
  Man: PropTypes.string.isRequired,
  Mdl: PropTypes.string.isRequired,
  From: PropTypes.string.isRequired,
  To: PropTypes.string.isRequired,
});

AirplaneInfo.propTypes = {
  airplane: airplanePropType.isRequired,
};

export default AirplaneInfo;
