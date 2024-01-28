import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <p>
          {'developed by '}
          <a href={'https://github.com/MonSSteRFF'} className={styles.footer_link}>
            MonSSteR
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
