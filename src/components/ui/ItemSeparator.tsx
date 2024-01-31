import React from 'react';

import styles from './ItemSeparator.module.scss';

interface ItemSeparatorProps {
  separatorType: number;
}

const ItemSeparator: React.FC<ItemSeparatorProps> = (props) => {
  return <div className={styles.separator} style={{ backgroundPositionY: -2 * props.separatorType }}></div>;
};

export default ItemSeparator;
