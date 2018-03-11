import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import AirplaneCard from '../AirplaneCard/AirplaneCard';


const AirplaneListing = (props) => {
  return (
    <section>
      <ListGroup>
        <ListGroupItem>
          <Row className="show-grid">
            <Col xs={4}>
              <span><b>Direction</b></span>
            </Col>
            <Col xs={4}>
              <span><b>ICAO</b></span>
            </Col>
            <Col xs={4}>
              <span><b>Altitude</b></span>
            </Col>
          </Row>
        </ListGroupItem>
        {props.airTraffic.acList
          .sort((elem1, elem2) => elem1.Alt > elem2.Alt)
          .map((airplane) => {
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
    Alt: PropTypes.number,
    Icao: PropTypes.string.isRequired,
    Op: PropTypes.string,
  })),
});

AirplaneListing.propTypes = {
  airTraffic: airTrafficPropType.isRequired,
};

export default AirplaneListing;
