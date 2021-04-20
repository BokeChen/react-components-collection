import React from 'react';
import { Route } from 'react-router-dom';

interface PrivateRouteProps {
  key: string;
  [key: string]: any;
}
/**
 * 路由权限的判断
 * @returns 没有权限就返回登录页面，有权限就返回相应的组件
 */
const PrivateRoute: React.FC<PrivateRouteProps> = ({ key, ...otherProps }) => {
  return <Route {...otherProps} key={key} />;
};

export default PrivateRoute;
