import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

function NumberTicker(props: { name: string; ticker: number }) {
  const [count, setCount] = useState<number>(0);
  const maxTimes: number = 200;
  const interval: number = props.ticker / maxTimes;
  useEffect(() => {
    let i: number = 0;
    let timer: number = 0;
    timer = window.setInterval(() => {
      if (i >= maxTimes) {
        window.clearInterval(timer);
        setCount(props.ticker);
        return;
      }
      setCount((prev) => {
        return Math.floor(prev + interval);
      });
      i++;
    }, 15);

    return () => {
      window.clearInterval(timer);
    };
  }, []);
  return (
    <div className={styles.counter_container}>
      <div className={styles.counter}>{count}</div>
      <span>{props.name}</span>
    </div>
  );
}

export default () => {
  return (
    <div className={styles.container}>
      <NumberTicker name="Twitter Followers" ticker={12000} />
      <NumberTicker name="YouTube Subscribers" ticker={5500} />
      <NumberTicker name="Facebook Fans" ticker={7500} />
    </div>
  );
};
