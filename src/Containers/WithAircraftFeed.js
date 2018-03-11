import React from 'react';
import PropTypes from 'prop-types';

/* Higher order component for continuous fetch of aircraft data near user's position
   It will fire interval fetching when user geoloc data is available
*/
function withAircraftFeed(WrappedComponent, API_URI, CORS_PROXY) {
  class _withAircraftFeed extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        airTraffic: {},
      };
    }

    // Wait untill valid geoloc data is passed down and start interval fetching
    componentDidUpdate(prevProps) {
      if (
        this.props.geoloc.available &&
        prevProps.geoloc.lat !== this.props.geoloc.lat &&
        prevProps.geoloc.lng !== this.props.geoloc.lng
      ) {
        // initial fetch
        this.getApiResponse();

        // fetching every one minute
        this.timer = setInterval(() => this.getApiResponse(), 1000);
      }
    }

    componentWillUnmount() {
      clearInterval(this.timer);
    }

    getApiResponse() {
      const { lat, lng } = this.props.geoloc;
      const QUERY = `?lat=${lat}&lng=${lng}&fDstL=0&fDstU=100`;
      const FULL_URL = `${CORS_PROXY}${API_URI}${QUERY}`;

      // origin header is needed to bypass the CORS via proxy
      // let's prettend that our domain name is www.airtraffictest.com
      const request = new Request(FULL_URL, {
        headers: new Headers({
          origin: 'www.airtraffictest.com',
        }),
      });
      fetch(request)
        .then(blob => blob.json())
        .then((data) => {
          this.setState({ airTraffic: data });
          return data;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    }

    render() {
      return (
        <WrappedComponent {...this.state} {...this.props} />
      );
    }
  }


  const geoLocPropType = PropTypes.shape({
    available: PropTypes.bool.isRequired,
    lat: PropTypes.number,
    lng: PropTypes.number,
    errorMessage: PropTypes.string,
  });

  _withAircraftFeed.propTypes = {
    geoloc: geoLocPropType.isRequired,
  };
  return _withAircraftFeed;
}

export default withAircraftFeed;
