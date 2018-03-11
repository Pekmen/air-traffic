import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './AirplaneInfo.css';


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
          <img className="manufacturer-logo" src={`https://logo-core.clearbit.com/${Man}.com?size=250`} alt={`${Man} logo`} />
        </Col>
        <Col md={8}>
          <div className="info-wrapper">
            <h1 className="manufacturer">{Man}</h1>
            <h2 className="model">{Mdl}</h2>
            <div className="destination">
              <p><b>From:</b> {From || 'Info Unavailable'}</p>
              <p><b>To:</b> {To || 'Info Unavailable'}</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const airplanePropType = PropTypes.shape({
  Man: PropTypes.string.isRequired,
  Mdl: PropTypes.string.isRequired,
  From: PropTypes.string,
  To: PropTypes.string,
});

AirplaneInfo.propTypes = {
  airplane: airplanePropType.isRequired,
};

export default AirplaneInfo;
