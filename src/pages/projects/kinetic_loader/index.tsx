import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

const WIDTH = 800;
const HEIGHT = 700;

export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.kinetic}></div>
    </div>
  );
};
