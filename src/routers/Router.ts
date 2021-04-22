import BasicLayout from 'src/layouts/BasicLayout';
import { RouteNode } from 'src/layouts/LayoutsTypes';
import { Roles } from 'src/models/modelTypes/global.types';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
const router: RouteNode[] = [
  { path: '/login', name: '登录', component: Login },
  {
    path: '/home',
    name: '主页Layout',
    authority: [Roles.Admin, Roles.Guest],
    component: BasicLayout,
    layout: true,
    routes: [
      {
        path: '/home',
        name: '主页',
        component: Home,
      },
      {
        path: '/area-archives',
        name: '测温趋势',
        authority: [Roles.Admin, Roles.Guest],
        redirect: '/area-archives/list',
        routes: [
          {
            path: '/area-archives/list',
            name: '区域档案',
            authority: [Roles.Admin, Roles.Guest],
            component: Home,
          },
        ],
      },
    ],
  },
  {
    path: '/',
    name: '首页',
    redirect: '/home',
  },
];
export default router;
