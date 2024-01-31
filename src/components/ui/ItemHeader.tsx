import React from 'react';

import styles from './ItemHeader.module.scss';

interface ItemHeaderProps {
  title: string;
  headerType: number;
}

const ItemHeader: React.FC<ItemHeaderProps> = (props) => {
  const headerInc = props.headerType > 5 ? 0 : props.headerType * 102;

  return (
    <div className={styles.header} style={{ backgroundPositionY: -(34 + headerInc) }}>
      <div
        className={styles.header_side}
        style={{ backgroundRepeat: 'no-repeat', backgroundPositionY: -(0 + headerInc) }}
      ></div>

      <p>{props.title}</p>

      <div
        className={styles.header_side}
        style={{ backgroundRepeat: 'no-repeat', backgroundPositionY: -(68 + headerInc) }}
      ></div>
    </div>
  );
};

export default ItemHeader;
