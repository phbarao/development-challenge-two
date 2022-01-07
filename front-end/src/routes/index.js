import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import ListPatients from '../pages/ListPatients';
import CreatePatient from '../pages/CreatePatient';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/list-patients" component={ListPatients} />
        <Route path="/create-patient" component={CreatePatient} />
      </Switch>
    </Router>
  );
}

export default Routes;
