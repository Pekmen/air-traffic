import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import Alert from 'react-s-alert';
import Home from '../../Pages/Home/Home';
import Airplane from '../../Pages/Airplane/Airplane';
import NotFound from '../../Pages/NotFound/NotFound';
import withAircraftFeed from '../../Containers/WithAircraftFeed';


/* Main component with router switcher
*/
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.geoloc.errorMessage) {
      Alert.error(this.props.geoloc.errorMessage, {
        position: 'top',
        effect: 'stackslide',
        beep: false,
        timeout: 'none',
        offset: 70,
      });
    }
    return (
      <main>
        <Grid>
          <Switch>
            <Route exact path="/" render={() => <Home {...this.props} />} />
            <Route path="/airplane/:_planeId" render={() => <Airplane {...this.props} />} />
            <Route component={NotFound} />
          </Switch>
        </Grid>
      </main>
    );
  }
}

// Wrapping Main inside withAircraftFeed HOC, response object will be available inside Main props
export default withAircraftFeed(
  Main,
  process.env.REACT_APP_API_URI,
  process.env.REACT_APP_CORS_PROXY,
);
