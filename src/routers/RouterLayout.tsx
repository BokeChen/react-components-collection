import _ from 'lodash';
import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { RouteNode } from 'src/layouts/LayoutsTypes';
import PrivateRoute from 'src/routers/PrivateRoute';

interface RouteLayoutProps {
  router: RouteNode[];
}
const RouteLayout: React.FC<RouteLayoutProps> = ({ router }) => {
  return (
    <Switch>
      {router.map(({ path, layout, routes, component, redirect, ...otherProps }) => {
        return (
          <PrivateRoute
            key={path + 'layout'}
            path={path}
            render={(props: any) => {
              // 如果只是layout 没有子路由直接生成layout组件
              if (layout && !_.isEmpty(routes) && component) {
                return React.createElement(component, {
                  router: routes, // 传入layout下面的routes 数据
                  ...otherProps,
                  ...props,
                });
              }
              // 如果不是layout 页面，也不是重定向的配置，直接渲染当前页面，比如login登录页面
              return redirect ? (
                <Redirect to={redirect} />
              ) : (
                component && React.createElement(component, props)
              );
            }}
            {...otherProps}
          />
        );
      })}
    </Switch>
  );
};

export default RouteLayout;
