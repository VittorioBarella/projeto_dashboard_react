import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/home/home';
import { Tasks } from './components/dashboard/tasks/tasks';
import { Health } from './components/dashboard/health/health';
import { Wallet } from './components/dashboard/wallet/wallet';
import { AccountProfile } from './components/dashboard/account/account-profile';
import { Settings } from './components/dashboard/settings/settings';

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

      <Route exact path='/settings'>
        <Settings />
      </Route>
    </Switch>
  );
}

export default Routes;
