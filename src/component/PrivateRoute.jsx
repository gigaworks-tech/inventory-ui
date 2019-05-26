// import React from 'react';
// import {
//   Route,
//   Redirect,
// } from 'react-router-dom';
// import PropTypes from 'prop-types';


// const AuthenticateRoute = ({ component: Component, authenticated, ...rest }) => (
//   <Route
//     {...rest}
//     render={props => (authenticated ? (
//       <Component {...rest} {...props} />
//     ) : (
//       <Redirect
//         to={{
//           pathname: '/login',
//           state: { from: props.location },
//         }}
//       />
//     ))
//       }
//   />
// );

// AuthenticateRoute.propTypes = {
//   authenticated: PropTypes.bool.isRequired,
//   component: PropTypes.shape().isRequired,
//   location: PropTypes.shape().isRequired,
// };

// export default AuthenticateRoute;

import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (authenticated ? (
      <Component {...rest} {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    ))
      }
  />
);

PrivateRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  component: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
};

export default PrivateRoute;
