import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import session from '../utils/sessionStorage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      session.loggedIn() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}
        />
      )
    )}
  />
);

export default PrivateRoute;
