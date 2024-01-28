import React from 'react';

import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return <main className={styles.main}>{props.children}</main>;
};

export default MainLayout;
