import React from 'react';
import { Link } from 'react-router-dom';

import MainLayout from '@/components/layout/MainLayout';
import { Page, Pages } from '@/router/Pages';

import styles from './ListOfFeatures.module.scss';

const ListOfFeatures = () => {
  const features = Pages.filter((p) => ![Page.Home, Page.ListOfFeatures].includes(p.route));

  console.log(features);

  return (
    <MainLayout>
      <p className={styles.title}>list of all features</p>

      <ul className={styles.list}>
        {features.map((feature, index) => (
          <li key={index} className={styles.list_item}>
            {`${index + 1}. `}
            <Link to={feature.route} className={styles.list_item_link}>
              {feature.name}
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default ListOfFeatures;
