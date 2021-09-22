import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [active, setActive] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      <div className={styles.navtor + (active ? ` ${styles.active}` : '')}>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Works</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <button
          className={styles.icon}
          onClick={() => {
            setActive(!active);
          }}
        >
          <div className={styles.line + ' ' + styles.line1}></div>
          <div className={styles.line + ' ' + styles.line2}></div>
        </button>
      </div>
    </div>
  );
};
