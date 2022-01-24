import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/home/home';
import { Tasks } from './components/tasks/tasks';
import { Health } from './components/health/health';
import { Wallet } from './components/wallet/wallet';
import { AccountProfile } from './components/account/account-profile';

function Routes() {
  return (
    <Switch>
      <Route exact path='/home'>
        <Home />
      </Route>

      <Route exact path='/tasks'>
        <Tasks />
      </Route>

      <Route exact path='/health'>
        <Health />
      </Route>

      <Route exact path='/wallet'>
        <Wallet />
      </Route>

      <Route exact path='/account-profile'>
        <AccountProfile />
      </Route>
    </Switch>
  );
}

export default Routes;
