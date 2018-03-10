import React from 'react';
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
      </div>
    );
  }
}


export default withGeoLocation(App);
