import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        {'developed by '}
        <a href={'https://github.com/MonSSteRFF'} target={'_blank'} className={styles.footer_link} rel="noreferrer">
          MonSSteR
        </a>
      </p>
    </footer>
  );
};

export default Footer;
