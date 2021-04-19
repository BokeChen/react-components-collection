import React from 'react';
import styles from './Home.module.scss';

interface HomeProps {
  [key: string]: any;
}

const Home: React.FC<HomeProps> = () => {
  return <div className={styles.wrap}>home</div>;
};

export default Home;
