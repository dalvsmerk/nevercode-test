import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Home } from 'home';
import { SignUp } from 'signup';

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
