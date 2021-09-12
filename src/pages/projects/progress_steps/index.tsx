import { useState } from 'react';
import styles from './index.less';

export default () => {
  const MAX_CIRCLE_NUM = 6;
  const [currentActive, setCurrentActive] = useState<number>(0);

  const circles = [];
  for (let i = 0; i < MAX_CIRCLE_NUM; i++) {
    circles.push(
      <div
        key={i}
        className={
          styles.circle + (i <= currentActive ? ` ${styles.active}` : '')
        }
      >
        {i + 1}
      </div>,
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.progressContainer}>
        <div
          className={styles.progress}
          style={{ width: `${(currentActive / (MAX_CIRCLE_NUM - 1)) * 100}%` }}
        ></div>
        {circles}
      </div>

      <button
        className={styles.btn}
        id="prev"
        disabled={currentActive === 0}
        onClick={() => {
          setCurrentActive(currentActive - 1);
        }}
      >
        Prev
      </button>
      <button
        className={styles.btn}
        id="next"
        disabled={currentActive === MAX_CIRCLE_NUM - 1}
        onClick={() => {
          setCurrentActive(currentActive + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};
