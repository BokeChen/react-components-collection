import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useStoreState } from 'src/hooks/easyPeasyApi';

interface PrivateRouteProps {
  key: string;
  [key: string]: any;
}
/**
 * 路由权限的判断
 * @returns 没有权限就返回登录页面，有权限就返回相应的组件
 */
const PrivateRoute: React.FC<PrivateRouteProps> = ({ key, authority = [], ...otherProps }) => {
  const { userInfo } = useStoreState((state) => state.globalModel);
  return !authority.includes(userInfo.role) && otherProps.path !== '/login' ? (
    <Redirect to="/login" />
  ) : (
    <Route {...otherProps} key={key} />
  );
};

export default PrivateRoute;
