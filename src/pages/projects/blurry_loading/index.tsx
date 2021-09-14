import { useEffect, useState } from 'react';
import styles from './index.less';

export default () => {
  const scale = (
    num: number,
    in_min: number,
    in_max: number,
    out_min: number,
    out_max: number,
  ) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
  const [loading, setLoading] = useState<number>(0);

  useEffect(() => {
    if (loading > 99) {
      return;
    }
    setTimeout(() => {
      setLoading(loading + 1);
    }, 30);
  }, [loading]);

  return (
    <div className={styles.container}>
      <section
        className={styles.bg}
        style={{ filter: `blur(${scale(loading, 0, 100, 30, 0)}px)` }}
      ></section>
      <div
        className={styles.loading_text}
        style={{ opacity: scale(loading, 0, 100, 1, 0) }}
      >
        {loading}%
      </div>
    </div>
  );
};
