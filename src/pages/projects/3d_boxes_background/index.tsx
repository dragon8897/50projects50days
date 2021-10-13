import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [big, setBig] = useState<boolean>(true);

  return (
    <div className={styles.body}>
      <button
        className={styles.magic}
        onClick={() => {
          setBig(!big);
        }}
      >
        Magic 🎩
      </button>
      <div className={styles.boxes + (big ? ` ${styles.big}` : '')}>
        {Array(16)
          .fill(0)
          .map((_, index) => {
            const i: number = Math.floor(index / 4);
            const j: number = index % 4;
            return (
              <div
                className={styles.box}
                style={{ backgroundPosition: `${-j * 125}px ${-i * 125}px` }}
              ></div>
            );
          })}
      </div>
    </div>
  );
};
