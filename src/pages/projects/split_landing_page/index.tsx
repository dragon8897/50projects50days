import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [inLeft, setInLeft] = useState<boolean>(false);
  const [inRight, setInRight] = useState<boolean>(false);

  return (
    <div
      className={
        styles.container +
        (inLeft ? ` ${styles.hover_left}` : '') +
        (inRight ? ` ${styles.hover_right}` : '')
      }
    >
      <div
        className={`${styles.split} ${styles.left}`}
        onMouseEnter={() => {
          setInLeft(true);
        }}
        onMouseLeave={() => {
          setInLeft(false);
        }}
      >
        <h1>Playstation 5</h1>
        <a className={styles.btn}>Buy Now</a>
      </div>
      <div
        className={`${styles.split} ${styles.right}`}
        onMouseEnter={() => {
          setInRight(true);
        }}
        onMouseLeave={() => {
          setInRight(false);
        }}
      >
        <h1>XBox Series X</h1>
        <a className={styles.btn}>Buy Now</a>
      </div>
    </div>
  );
};
