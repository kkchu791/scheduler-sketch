import React from 'react';
import { Login } from './Login';
import { Dashboard } from './Dashboard';
import { Home } from './Home';
import { SignUp } from './SignUp';
import { Layout } from './Layout';
import { UserProfile } from './UserProfile';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/scheduler">
          <Layout>
            <Dashboard />
          </Layout>
        </Route>
        <Route path="/users/:user_id" component={UserProfile} />
      </Switch>

    </Router>
  )
}

export default Main;