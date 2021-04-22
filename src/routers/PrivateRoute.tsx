import _ from 'lodash';
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
  // 没定义权限 或者 当前用户用户这个模块的权限 和 路由是 login 组件时， 直接渲染组件
  return _.isEmpty(authority) ||
    authority.includes(userInfo.role) ||
    otherProps.path == '/login' ? (
    <Route {...otherProps} key={key} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
