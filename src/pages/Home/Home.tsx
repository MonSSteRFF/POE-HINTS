import React from 'react';
import { Link } from 'react-router-dom';

import MainLayout from '@/components/layout/MainLayout';
import { Page, Pages } from '@/router/Pages';

import styles from './Home.module.scss';

const Home = () => {
  const rndScreen = () => {
    const notHome = Pages.filter((i) => i.route !== Page.Home);
    const r = Math.floor(Math.random() * (notHome.length - 1));
    return notHome[r];
  };

  const randomFeature = rndScreen();

  return (
    <MainLayout>
      <div className={styles.home}>
        <div className={styles.home_wrapper}>
          <p style={{ color: 'white' }}>Hello exile!</p>
          <p>
            This site can make your way into the path of exile easier and help with
            various tips or prices for items. You can also find other features here or
            send me suggestions or corrections on discord. And remember that this
            application is distributed under the MIT license
          </p>

          <p>
            {'try '}
            <Link to={randomFeature.route} className={styles.home_link}>
              {randomFeature.name}
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
