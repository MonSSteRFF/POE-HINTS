import React from 'react';

import { cn } from '@/utils/className';

import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
  style?: string;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return <main className={cn([styles.main, props.style])}>{props.children}</main>;
};

export default MainLayout;
