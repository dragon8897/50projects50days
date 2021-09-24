import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [index, setIndex] = useState<number>(-1);
  const [fullCups, setFullCups] = useState<number>(0);
  const MAX_CUPS = 8;
  const cups: number[] = new Array(MAX_CUPS).fill(0);

  useEffect(() => {
    setFullCups(index + 1);
  }, [index]);

  return (
    <div className={styles.container}>
      <h1>Drink Water</h1>
      <h3>Goal: 2 Liters</h3>

      <div className={styles.cup}>
        <div
          className={styles.remained}
          style={{
            visibility: fullCups != MAX_CUPS ? 'visible' : 'hidden',
            height: fullCups == MAX_CUPS ? '0px' : '',
          }}
        >
          <span id="liters">{`${2 - (250 * fullCups) / 1000}L`}</span>
          <small>Remained</small>
        </div>

        <div
          className={styles.percentage}
          style={{
            visibility: fullCups > 0 ? 'visible' : 'hidden',
            height: `${(fullCups / MAX_CUPS) * 330}px`,
          }}
        >
          {`${(fullCups / MAX_CUPS) * 100}%`}
        </div>
      </div>

      <p className={styles.text}>
        Select how many glasses of water that you have drank
      </p>

      <div className={styles.cups}>
        {cups.map((_, i) => {
          return (
            <div
              key={i}
              className={
                styles.cup +
                ' ' +
                styles.cup_small +
                (i <= index ? ` ${styles.full}` : '')
              }
              onClick={() => {
                if (i === index) {
                  setIndex(index - 1);
                } else {
                  setIndex(i);
                }
              }}
            >
              250 ml
            </div>
          );
        })}
      </div>
    </div>
  );
};
