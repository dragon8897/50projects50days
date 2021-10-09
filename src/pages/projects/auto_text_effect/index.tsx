import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

let index: number = 0;

export default () => {
  const sentence: string = 'We Love Programming!';

  const [text, setText] = useState<string>('Speed:');
  const [speed, setSpeed] = useState<number>(1);
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    window.clearInterval(timer);
    let t: number = 0;
    t = window.setInterval(() => {
      setText(sentence.slice(0, index));
      index = ((index + 1) % sentence.length) + 1;
    }, 300 / speed);
    setTimer(t);

    return () => {
      window.clearInterval(t);
    };
  }, [speed]);

  return (
    <div className={styles.body}>
      <h1>{text}</h1>
      <div className={styles.div}>
        <label>Speed:</label>
        <input
          className={styles.input}
          type="number"
          name="speed"
          id="speed"
          value={speed}
          onChange={(e: React.ChangeEvent) => {
            setSpeed(parseInt((e.target as HTMLInputElement).value));
          }}
          min="1"
          max="10"
          step="1"
        />
      </div>
    </div>
  );
};
