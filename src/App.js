import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Airplane from './Pages/Airplane/Airplane';
// import logo from './logo.svg';
import './App.css';

const App = (props) => {
  console.log(props);
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
};

export default App;
