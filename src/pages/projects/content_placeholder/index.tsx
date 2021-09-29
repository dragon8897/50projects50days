import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let t: number = 0;
    t = window.setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(t);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card_header + ' ' + styles.animated_bg}>
          {!loading && (
            <img
              className={styles.img_ok}
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
              alt=""
            />
          )}
        </div>

        <div className={styles.card_content}>
          <h3
            className={
              styles.card_title +
              ' ' +
              styles.animated_bg +
              ' ' +
              styles.animated_bg_text
            }
          >
            {!loading && `Lorem ipsum dolor sit amet`}
          </h3>
          <p className={styles.card_excerpt}>
            {!loading &&
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis`}
            {loading &&
              Array(3)
                .fill(0)
                .map((_, i) => {
                  return (
                    <span
                      key={i}
                      className={
                        styles.animated_bg + ' ' + styles.animated_bg_text
                      }
                    >
                      &nbsp;
                    </span>
                  );
                })}
          </p>
          <div className={styles.author}>
            <div className={styles.profile_img + ' ' + styles.animated_bg}>
              {!loading && (
                <img
                  className={styles.img_ok}
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt=""
                />
              )}
            </div>
            <div className={styles.author_info}>
              <strong
                className={
                  loading
                    ? styles.animated_bg + ' ' + styles.animated_bg_text
                    : ''
                }
                id="name"
              >
                {!loading && `John Doe`}
              </strong>
              <small
                className={
                  loading
                    ? styles.animated_bg + ' ' + styles.animated_bg_text
                    : ''
                }
                id="date"
              >
                {!loading && `Oct 08, 2020`}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
