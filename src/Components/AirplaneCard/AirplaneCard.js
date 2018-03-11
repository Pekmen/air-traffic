import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListGroupItem, Row, Col } from 'react-bootstrap';

import './AirplaneCard.css';

const AirplaneCard = (props) => {
  const { airplane } = props;
  const direction = airplane.Trak > 180 ? 'west' : 'east';

  return (
    <ListGroupItem className="airplane-card">
      <article>
        <Link to={`/airplane/${airplane.Id}`}>
          <Row className="show-grid">
            <Col xs={12} sm={4}>
              <img className="plane-direction" src={`/airplane-${direction}.svg`} alt="Airplane direction" />
            </Col>
            <Col xs={12} sm={4}>
              <span>Altitude: {airplane.Alt}</span>
            </Col>
            <Col xs={12} sm={4}>
              <span>Call code: {airplane.Call}</span>
            </Col>
          </Row>
        </Link>
      </article>
    </ListGroupItem>
  );
};

const airplanePropType = PropTypes.shape({
  Id: PropTypes.number.isRequired,
  Alt: PropTypes.number.isRequired,
  Call: PropTypes.string.isRequired,
});

AirplaneCard.propTypes = {
  airplane: airplanePropType.isRequired,
};

export default AirplaneCard;
