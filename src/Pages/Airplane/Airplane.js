import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AirplaneInfo from '../../Components/AirplaneInfo/AirplaneInfo';

/* Page which will pass right data by plane Id from url parameters
*/
const Airplane = (props) => {
  const { _planeId } = props.match.params;
  let airplane = {};
  if (props.airTraffic.acList) {
    airplane = props.airTraffic.acList.filter(plane =>
      plane.Id == _planeId.toString()
    )[0];
  }
  return (
    <section>
      {
        (props.airTraffic.acList)
        ? (
          <section>
            <AirplaneInfo airplane={airplane} />
          </section>
        )
        : ''
    }
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

Airplane.propTypes = {
  airTraffic: airTrafficPropType.isRequired,
  match: PropTypes.object.isRequired,
};


export default withRouter(Airplane);
