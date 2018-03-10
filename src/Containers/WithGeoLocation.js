import React from 'react';

/* Higher order component for extracting geolocation logic.
   The state is comprised of data about geoloc availability, latitude and longitude of user,
   and if something goes wrong, an error message will be populated with relative information.
   Currently used to wrap the <App /> component.
*/
function withGeolocation(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        geolocAvailable: true,
        geolocErrorMessage: '',
        latLng: {},
      };
      this.geoFindMe.bind(this);
    }


    componentDidMount() {
      this.geoFindMe();
    }

    // Use global navigator object to fetch geo data of user
    // This is critical for app to work correctly
    geoFindMe() {
      if (!navigator.geolocation) {
        this.setState({ geolocAvailable: 'false' });
        this.setState({ geolocErrorMessage: "Your browser doesn't support geolocation" });
        return;
      }
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        this.setState({ latLng: { latitude, longitude } });
      }, (error) => {
        switch (error.code) {
          // user refused to allow geolocation
          case 1:
            this.setState({ geolocErrorMessage: 'It is necessary to allow geolocation to use this app.' });
            break;
          // no internet access
          case 2:
            this.setState({ geolocErrorMessage: "It looks like you don't have internet access." });
            break;
          default:
            this.setState({ geolocErrorMessage: 'We have problems with geolocation service. Please try again later.' });
            break;
        }
      });
    }


    // For cleaner usage in child components,
    // state is packed into a single {geoloc} object,
    render() {
      return (
        <WrappedComponent
          geoloc={{
            available: this.state.geolocAvailable,
            errorMessage: this.state.geolocErrorMessage,
            lat: this.state.latLng.latitude,
            lng: this.state.latLng.longitude,
          }}
          {...this.props}
        />
      );
    }
  };
}


export default withGeolocation;
