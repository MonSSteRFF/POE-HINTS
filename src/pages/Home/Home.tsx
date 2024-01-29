import React from 'react';
import { Link } from 'react-router-dom';

import { playSound } from '@/components/effect/AudioSounds';
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
          <button onClick={() => playSound('DivineOrb')} className={styles.home_title}>
            Hello exile!
          </button>

          <p className={styles.home_description}>
            {
              'This site can make your way into the path of exile easier and help with various tips or prices for items. You can also find other features here or send me suggestions or corrections on discord. And remember that this application is distributed under the MIT license'
            }
          </p>

          <p className={styles.home_text}>
            {'try '}
            <Link to={randomFeature.route} className={styles.home_link}>
              {randomFeature.name.toUpperCase()}
            </Link>
            {' or open '}
            <Link to={Page.ListOfFeatures} className={styles.home_link}>
              {'List of features'}
            </Link>
          </p>

          <p className={styles.home_text}>
            {'github: '}
            <a href={'https://github.com/MonSSteRFF'} className={styles.home_link}>
              {'https://github.com/MonSSteRFF'}
            </a>
          </p>

          <p className={styles.home_text}>
            {'issues: '}
            <a href={'https://github.com/MonSSteRFF/POE-HINTS/issues'} className={styles.home_link}>
              {'https://github.com/MonSSteRFF/POE-HINTS/issues'}
            </a>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
