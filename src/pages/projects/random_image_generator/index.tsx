import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

const unsplashURL = 'https://source.unsplash.com/random/';

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}

export default () => {
  return (
    <div className={styles.body}>
      <h1>Random Image Feed</h1>
      <div className={styles.container}>
        {Array(15)
          .fill(0)
          .map((_, i) => {
            return <img key={i} src={unsplashURL + getRandomSize()}></img>;
          })}
      </div>
    </div>
  );
};
