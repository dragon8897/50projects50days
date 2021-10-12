import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [index, setIndex] = useState<number>(0);

  const images: {
    src: string;
    alt: string;
  }[] = [
    {
      src: 'https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80',
      alt: 'first-image',
    },
    {
      src: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      alt: 'second-image',
    },
    {
      src: 'https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      alt: 'third-image',
    },
    {
      src: 'https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80',
      alt: 'fourth-image',
    },
  ];

  useEffect(() => {
    const t = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => {
      window.clearTimeout(t);
    };
  }, [index]);

  return (
    <div className={styles.body}>
      <div className={styles.carousel}>
        <div
          className={styles.image_container}
          style={{ transform: `translateX(${-index * 500}px)` }}
        >
          {images.map((image, i) => {
            return (
              <img
                key={i}
                className={styles.img}
                src={image.src}
                alt={image.alt}
              />
            );
          })}
        </div>

        <div className={styles.buttons_container}>
          <button
            className={styles.btn}
            onClick={() => {
              setIndex((index + images.length - 1) % images.length);
            }}
          >
            Prev
          </button>
          <button
            className={styles.btn}
            onClick={() => {
              setIndex((index + 1) % images.length);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
