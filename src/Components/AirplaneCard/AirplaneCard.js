import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListGroupItem, Row, Col } from 'react-bootstrap';

const AirplaneCard = (props) => {
  const { airplane } = props;

  return (
    <article>
      <ListGroupItem>
        <Link to={`/airplane/${airplane.Id}`}>
          <Row className="show-grid">
            <Col xs={12} sm={4}>
              <img src="/airplane.svg" alt="Airplane shape" />
            </Col>
            <Col xs={6} sm={4}>
              <span>Altitude: {airplane.Alt}</span>
            </Col>
            <Col xs={6} sm={4}>
              <span>Call code: {airplane.Call}</span>
            </Col>
          </Row>
        </Link>
      </ListGroupItem>
    </article>
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
