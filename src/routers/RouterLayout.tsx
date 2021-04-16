import _ from 'lodash';
import React from 'react';
import { Redirect, RouteComponentProps, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { RouteNode } from './RouterTypes';

export type RouterLayoutType = RouterLayoutProps & RouteComponentProps;

interface RouterLayoutProps {
  router: RouteNode[];
}

const RouterLayout: React.FC<RouterLayoutProps> = ({ router }: RouterLayoutProps) => (
  <Switch>
    {router.map(({
      path, routes, layout, component, redirect, ...otherProps
    }) => (
      <PrivateRoute
        key={path}
        path={path}
        render={(props) => {
          if (layout && !_.isEmpty(routes) && component) {
            return React.createElement(component, {
              router: routes,
              ...otherProps,
              ...props,
            });
          }

          return redirect ? (
            <Redirect to={redirect} />
          ) : (
            component && React.createElement(component, props)
          );
        }}
        {...otherProps}
      />
    ))}
  </Switch>
);

export default RouterLayout;
