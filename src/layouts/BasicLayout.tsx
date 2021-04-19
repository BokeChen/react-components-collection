import { Layout } from 'antd';
import React from 'react';
import styles from './BasicLayout.module.scss';

interface BasicLayoutProps {
  [key: string]: any;
}
const { Header, Sider, Content } = Layout;
const BasicLayout: React.FC<BasicLayoutProps> = () => {
  return (
    <Layout className={styles.wrap}>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
