import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

const COUNT = 6;

export default () => {
  const [index, setIndex] = useState<number>(0);
  const [ticking, setTicking] = useState<boolean>(true);
  const seq: number[] = [...Array(COUNT).keys()].reverse();

  return (
    <div className={styles.body}>
      <div className={styles.counter + (ticking ? '' : ` ${styles.hide}`)}>
        <div className={styles.nums}>
          {seq.map((s, i) => {
            return (
              <span
                key={i}
                className={
                  Math.floor(index / 2) === i
                    ? index % 2 === 0
                      ? styles.in
                      : styles.out
                    : ''
                }
                onAnimationEnd={(e: React.AnimationEvent) => {
                  if (index + 1 === COUNT * 2) {
                    setTicking(false);
                  } else {
                    setIndex(index + 1);
                  }
                }}
              >
                {s}
              </span>
            );
          })}
        </div>
        <h4 className={styles.h4}>Get Ready</h4>
      </div>

      <div className={styles.final + (ticking ? '' : ` ${styles.show}`)}>
        <h1>GO</h1>
        <button
          className={styles.replay}
          onClick={() => {
            setTicking(true);
            setIndex(0);
          }}
        >
          <span>Replay</span>
        </button>
      </div>
    </div>
  );
};
