import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import CreatePatient from '../pages/CreatePatient';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/create-patient" component={CreatePatient} />
      </Switch>
    </Router>
  );
}

export default Routes;
