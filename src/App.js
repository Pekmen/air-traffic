import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Airplane from './Pages/Airplane/Airplane';
// import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geolocAvailable: undefined,
      geolocErrorMessage: '',
      geoloc: {},
    };
    this.geoFindMe.bind(this);
  }
  componentDidMount() {
    this.geoFindMe();
  }

  geoFindMe() {
    if (!navigator.geolocation) {
      this.setState({ geolocAvailable: 'false' });
      this.setState({ geolocErrorMessage: "Your browser doesn't support geolocation" });
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      this.setState({ geoloc: { latitude, longitude } });
    }, (error) => {
      switch (error.code) {
        case 1:
          this.setState({ geolocErrorMessage: 'It is necessary to allow geolocation to use this app.' });
          break;
        case 2:
          this.setState({ geolocErrorMessage: "It looks like you don't have internet access." });
          break;
        default:
          this.setState({ geolocErrorMessage: 'We have problems with geolocation service. Please try again later.' });
          break;
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <p>{this.state.geolocAvailable}</p>
        <p>{this.state.geoloc.longitude}</p>
        <p>{this.state.geoloc.latitude}</p>
        <p>{this.state.geolocErrorMessage}</p>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/airplane/:_planeId" component={Airplane} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
