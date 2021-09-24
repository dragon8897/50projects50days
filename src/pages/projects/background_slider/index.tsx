import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const bgUrls: string[] = [
    'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
    'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
    'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  ];

  const [index, setIndex] = useState<number>(0);

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url("${bgUrls[index]}")` }}
    >
      <div className={styles.slider_container}>
        {bgUrls.map((bg, i) => {
          return (
            <div
              key={i}
              className={
                styles.slide + (i === index ? ` ${styles.active}` : '')
              }
              style={{ backgroundImage: `url("${bg}")` }}
            ></div>
          );
        })}

        <button
          className={styles.arrow + ' ' + styles.left_arrow}
          onClick={() => {
            setIndex((index - 1 + bgUrls.length) % bgUrls.length);
          }}
        >
          {`<`}
        </button>

        <button
          className={styles.arrow + ' ' + styles.right_arrow}
          onClick={() => {
            setIndex((index + 1) % bgUrls.length);
          }}
        >
          {`>`}
        </button>
      </div>
    </div>
  );
};
