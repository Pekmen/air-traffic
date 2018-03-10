import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Airplane from '../../Pages/Airplane/Airplane';
import NotFound from '../../Pages/NotFound/NotFound';


/* Main component with router switcher
*/
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/airplane/:_planeId" component={Airplane} />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}


export default Main;
