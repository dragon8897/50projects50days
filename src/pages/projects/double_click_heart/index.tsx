import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [times, setTimes] = useState<number>(0);
  const [hearts, setHearts] = useState<{ x: number; y: number }[]>([]);

  return (
    <div className={styles.body}>
      <h3 className={styles.h3}>
        Double click on the image to <i className={styles.my_true_heart}></i> it
      </h3>
      <small className={styles.small}>
        You liked it <span>{times}</span> times
      </small>

      <div
        className={styles.loveMe}
        onDoubleClick={(e: React.MouseEvent) => {
          setTimes(times + 1);
          setHearts((prev) => [
            ...prev,
            {
              x: e.clientX - (e.target as HTMLElement).offsetLeft,
              y: e.clientY - (e.target as HTMLElement).offsetTop,
            },
          ]);
          setTimeout(() => {
            setHearts((prev) => {
              return prev.slice(1);
            });
          }, 3000);
        }}
      >
        {hearts.map((h, i) => {
          return (
            <i
              key={i}
              className={styles.my_true_heart}
              style={{ left: `${h.x}px`, top: `${h.y}px` }}
            ></i>
          );
        })}
      </div>
    </div>
  );
};
