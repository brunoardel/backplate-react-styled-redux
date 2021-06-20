import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const user = {
    token: 'teste',
  };

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === (!!user && !!user.token) ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
