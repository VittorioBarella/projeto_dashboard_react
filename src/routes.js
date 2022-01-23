import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { AccountProfile } from './components/account/account-profile';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/account-profile' component={AccountProfile} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
