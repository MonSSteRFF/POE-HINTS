import React from 'react';

import {
  AnotherEssenceImageList,
  ArrayAnotherEssences,
  ArrayEssences,
  E_AnotherEssences,
  EssenceImageList,
} from '@/assets/icons/essence/EssenceImageList';
import MainLayout from '@/components/layout/MainLayout';
import Item from '@/components/ui/Item';
import { DS_AnotherEssenceList } from '@/pages/Essence/DS_EssenceList';

import styles from './Essence.module.scss';

const Essence = () => {
  return (
    <MainLayout>
      <div className={styles.main}>
        <div className={styles.another}>
          {(Object.keys(AnotherEssenceImageList) as Array<keyof typeof AnotherEssenceImageList>).map((key) => {
            const item = {
              image: AnotherEssenceImageList[key],
              data: DS_AnotherEssenceList[key],
            };

            return (
              <div key={key}>
                <Item item={{ ...item.data, image: item.image, itemType: 2 }} />

                <p>{key}</p>
                <img src={item.image} alt={key} />
              </div>
            );
          })}
        </div>

        <div>
          {(Object.keys(EssenceImageList) as Array<keyof typeof EssenceImageList>).map((key) => {
            const item = EssenceImageList[key];

            return (
              <div key={key}>
                <p>key: {key}</p>

                {(Object.keys(item) as Array<keyof typeof item>).map((e_key) => {
                  const e_item = item[e_key];

                  return (
                    <div key={e_key}>
                      <p>key: {e_key}</p>
                      <img src={e_item} alt={e_key} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <p>essence list</p>
    </MainLayout>
  );
};

export default Essence;
