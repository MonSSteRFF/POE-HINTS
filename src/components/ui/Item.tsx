import React from 'react';
import cn from 'simple-class-name';

import ItemHeader from '@/components/ui/ItemHeader';
import ItemSeparator from '@/components/ui/ItemSeparator';

import styles from './Item.module.scss';

interface I_Item {
  name: string;
  header: string[][];
  image: string;
  itemType: number;
  stats: string[];
  description: string[];
}

const Item: React.FC<{ item: I_Item }> = (props) => {
  const { item } = props;

  return (
    <div className={cn(styles.item, `${styles[`t${item.itemType}`]}`)}>
      <ItemHeader title={item.name} headerType={item.itemType} />
      <div className={styles.info}>
        <div className={styles.info_header}>
          {item.header.map((item, index) => (
            <p key={index} className={styles.info_header_stat}>
              {item[0]} <span className={styles.info_header_uni}>{item[1]}</span>
            </p>
          ))}
        </div>

        <ItemSeparator separatorType={item.itemType} />

        <div>
          {item.stats.map((stat, statIndex) => (
            <p key={statIndex}>{stat}</p>
          ))}
        </div>

        <ItemSeparator separatorType={item.itemType} />

        <div>
          {item.description.map((desc, descIndex) => (
            <p key={descIndex}>{desc}</p>
          ))}
        </div>

        <ItemSeparator separatorType={item.itemType} />

        <div>
          <img src={item.image} alt={item.name} />
        </div>
      </div>
    </div>
  );
};

export default Item;
