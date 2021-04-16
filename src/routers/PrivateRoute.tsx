import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { Roles } from './RouterTypes';

interface PrivateRouteProps extends RouteProps {
  authority?: Roles[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ authority, ...otherProps }) => (otherProps.path !== '/login' ? (
  <Redirect to="/login" />
) : (
  <Route {...otherProps} />
));

export default PrivateRoute;
