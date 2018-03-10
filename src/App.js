import React from 'react';
import { Switch, Route } from 'react-router-dom';
import withGeoLocation from './Containers/WithGeoLocation';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Airplane from './Pages/Airplane/Airplane';
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/airplane/:_planeId" component={Airplane} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withGeoLocation(App);
