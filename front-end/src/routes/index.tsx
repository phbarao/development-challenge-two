import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CreatePatient from '../pages/CreatePatient';
import Landing from '../pages/Landing';
import ListPatients from '../pages/ListPatients';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Landing} />

      <Route path="/create-patient" component={CreatePatient} />

      <Route path="/list-patients" component={ListPatients} />
    </Switch>
  </Router>
);

export default Routes;
