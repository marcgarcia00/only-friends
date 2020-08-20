import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPage from './app/register/index';
import LandingPage from './app/landing-page/index';
import PageNotFound from './app/page-not-found/index';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={RegisterPage} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};
export default Routes;