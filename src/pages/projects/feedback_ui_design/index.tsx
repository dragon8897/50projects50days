import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [sended, setSended] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const emojis: {
    image: string;
    name: string;
  }[] = [
    {
      image: 'https://image.flaticon.com/icons/svg/187/187150.svg',
      name: 'Unhappy',
    },
    {
      image: 'https://image.flaticon.com/icons/svg/187/187136.svg',
      name: 'Neutral',
    },
    {
      image: 'https://image.flaticon.com/icons/svg/187/187133.svg',
      name: 'Satisfied',
    },
  ];

  return (
    <div className={styles.body}>
      <div id="panel" className={styles.panel_container}>
        {sended ? (
          <div>
            <strong>Thank You!</strong>
            <br />
            <strong>Feedback: {emojis[index].name}</strong>
            <p>We'll use your feedback to improve our customer support</p>
          </div>
        ) : (
          <div>
            <strong>
              How satisfied are you with our <br /> customer support
              performance?
            </strong>
            <div className={styles.ratings_container}>
              {emojis.map((e, i) => {
                return (
                  <div
                    key={i}
                    className={
                      styles.rating + (i === index ? ` ${styles.active}` : '')
                    }
                    onClick={() => {
                      setIndex(i);
                    }}
                  >
                    <img src={e.image} alt={e.name} />
                    <small>{e.name}</small>
                  </div>
                );
              })}
            </div>
            <button
              className={styles.btn}
              onClick={() => {
                setSended(true);
              }}
            >
              Send Review
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
