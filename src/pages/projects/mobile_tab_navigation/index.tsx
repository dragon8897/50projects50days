import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [index, setIndex] = useState<number>(0);

  const contents: {
    image: string;
    button: string;
  }[] = [
    {
      image:
        'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
      button: 'home',
    },
    {
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      button: 'work',
    },
    {
      image:
        'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80',
      button: 'blog',
    },
    {
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      button: 'about',
    },
  ];

  return (
    <div className={styles.body}>
      <div className={styles.phone}>
        {contents.map((c, i) => {
          return (
            <img
              key={i}
              src={c.image}
              alt={c.button}
              className={
                styles.content + (i === index ? +` ${styles.show}` : '')
              }
            />
          );
        })}
        <nav className={styles.nav}>
          <ul>
            {contents.map((c, i) => {
              return (
                <li
                  key={i}
                  className={i === index ? styles.active : ''}
                  onClick={() => {
                    setIndex(i);
                  }}
                >
                  <p>{c.button}</p>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};
