import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = 500;

const Square = () => {
  const [over, setOver] = useState<boolean>(false);
  const [bg, setBg] = useState<string>('#1d1d1d');
  const [bs, setBs] = useState<string>('0 0 2px #000');

  useEffect(() => {
    if (over) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      setBg(color);
      setBs(`0 0 2px ${color}, 0 0 10px ${color}`);
    } else {
      setBg('#1d1d1d');
      setBs('0 0 2px #000');
    }
  }, [over]);

  return (
    <div
      className={styles.square}
      style={{ background: bg, boxShadow: bs }}
      onMouseOver={() => {
        setOver(true);
      }}
      onMouseOut={() => {
        setOver(false);
      }}
    ></div>
  );
};

export default () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        {Array(SQUARES)
          .fill(0)
          .map((_, i) => {
            return <Square key={i}></Square>;
          })}
      </div>
    </div>
  );
};
