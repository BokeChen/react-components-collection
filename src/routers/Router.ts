import BasicLayout from 'src/layouts/BasicLayout';
import { RouteNode } from 'src/layouts/layoutsTypes';
import Home from 'src/pages/Home';
const router: RouteNode[] = [
  {
    path: '/home',
    name: '主页Layout',
    component: BasicLayout,
    layout: true,
    routes: [
      {
        path: '/home',
        name: '主页',
        component: Home,
      },
    ],
  },
];
export default router;
