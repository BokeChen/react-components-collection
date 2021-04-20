import React from 'react';
import styles from './Login.module.scss';

interface LoginProps {
  [key: string]: any;
}

const Login: React.FC<LoginProps> = () => {
  return <div className={styles.wrap}>登录页面</div>;
};

export default Login;
