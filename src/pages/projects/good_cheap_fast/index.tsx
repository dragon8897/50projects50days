import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [good, setGood] = useState<boolean>(false);
  const [cheap, setCheap] = useState<boolean>(false);
  const [fast, setFast] = useState<boolean>(false);

  useEffect(() => {
    if (good && cheap && fast) {
      setFast(false);
    }
  }, [good]);

  useEffect(() => {
    if (good && cheap && fast) {
      setGood(false);
    }
  }, [cheap]);

  useEffect(() => {
    if (good && cheap && fast) {
      setCheap(false);
    }
  }, [fast]);

  return (
    <div className={styles.body}>
      <h2>How do you want your project to be?</h2>
      <div className={styles.toggle_container}>
        <input
          type="checkbox"
          id="good"
          className={styles.toggle}
          checked={good}
          onChange={(e: React.ChangeEvent) => {
            setGood((e.target as HTMLInputElement).checked);
          }}
        />
        <label htmlFor="good" className={styles.label}>
          <div className={styles.ball}></div>
        </label>
        <span>Good</span>
      </div>

      <div className={styles.toggle_container}>
        <input
          type="checkbox"
          id="cheap"
          className={styles.toggle}
          checked={cheap}
          onChange={(e: React.ChangeEvent) => {
            setCheap((e.target as HTMLInputElement).checked);
          }}
        />
        <label htmlFor="cheap" className={styles.label}>
          <div className={styles.ball}></div>
        </label>
        <span>Cheap</span>
      </div>

      <div className={styles.toggle_container}>
        <input
          type="checkbox"
          id="fast"
          className={styles.toggle}
          checked={fast}
          onChange={(e: React.ChangeEvent) => {
            setFast((e.target as HTMLInputElement).checked);
          }}
        />
        <label htmlFor="fast" className={styles.label}>
          <div className={styles.ball}></div>
        </label>
        <span>Fast</span>
      </div>
    </div>
  );
};
