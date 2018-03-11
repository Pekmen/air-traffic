import React from 'react';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

import withGeoLocation from './Containers/WithGeoLocation';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
// import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main {...this.props} />
        <Alert stack={{ limit: 3 }} />
      </div>
    );
  }
}

// Wrapping App component inside withGeoLocation HOC, geoloc data will be passed to
// App component as a prop
export default withGeoLocation(App);
