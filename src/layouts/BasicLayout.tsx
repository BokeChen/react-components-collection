import { CaretDownFilled } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import _ from 'lodash';
import React from 'react';
import { Link, Redirect, Switch, useHistory, useLocation } from 'react-router-dom';
import { useStoreState } from 'src/hooks/easyPeasyApi';
import PrivateRoute from 'src/routers/PrivateRoute';
import { RouteNode } from 'src/routers/RouterTypes';
import styles from './BasicLayout.module.scss';
interface BasicLayoutProps {
  router: RouteNode[]; // 读取router 里面有layout 里面的routes 路由
}
const { Header, Content } = Layout;
const { SubMenu } = Menu;
const MenuItem = Menu.Item;
const BasicLayout: React.FC<BasicLayoutProps> = ({ router }) => {
  const { userInfo } = useStoreState((state) => state.globalModel);
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;
  const openKey = '/' + pathname.split('/')[1];

  return (
    <Layout className={styles.wrap}>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Link className={styles.logo} to="/" />
          <span>{'系统名字'}</span>
        </div>
        <Menu
          className={styles.mid}
          mode="horizontal"
          selectedKeys={[openKey]}
          onSelect={(param) => {
            // if (param.key && param.key === 'invalid_route') return;
            const item = router.find((m) => m.path === param.key && m.redirect);
            if (item) {
              history.push(item.redirect!);
            } else {
              history.push(param.key + '');
            }
          }}
        >
          {router
            .filter((m) => !m.hideInMenu)
            .map((m) => {
              const condition =
                (m.routes &&
                  m.routes?.filter((v) => m.authList && m.authList?.includes(userInfo.role))
                    .length) ||
                0;
              if (m.hasSubMenu && !_.isEmpty(m.routes) && m.routes && condition >= 2) {
                // 只有一个菜单时，不显示下拉菜单选项
                return (
                  <SubMenu
                    key={m.path}
                    title={
                      <span>
                        {/* {m.icon && React.createElement(m.icon)} */}
                        <span>{m.name}</span>
                        <CaretDownFilled style={{ fontSize: 14, marginLeft: 7 }} />
                      </span>
                    }
                  >
                    {m.routes?.map((sm) =>
                      sm.authList && sm.authList?.includes(userInfo.role) ? (
                        <MenuItem key={sm.path}>{sm.name}</MenuItem>
                      ) : (
                        ''
                      ),
                    )}
                  </SubMenu>
                );
              }
              return <MenuItem key={m.path}>{m.name}</MenuItem>;
            })}
        </Menu>
      </Header>
      <Layout className={styles.content}>
        <Content>
          <Switch>
            {router.map((m) => {
              const {
                name,
                hideInMenu,
                path,
                routes,
                layout,
                redirect,
                component,
                ...otherProps
              } = m;
              // handle layout
              if (layout && component && !_.isEmpty(routes)) {
                return (
                  <PrivateRoute
                    key={path}
                    path={path}
                    render={(props: any) =>
                      React.createElement(component, { router: routes, ...props })
                    }
                    {...otherProps}
                  />
                );
              }
              if (routes && !_.isEmpty(routes)) {
                return routes.map((n) => <PrivateRoute key={n.path} {...n} />);
              }

              return (
                <PrivateRoute
                  key={path}
                  path={path}
                  render={(props: any) =>
                    redirect ? (
                      <Redirect to={redirect} />
                    ) : (
                      component && React.createElement(component, props)
                    )
                  }
                  {...otherProps}
                />
              );
            })}
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
