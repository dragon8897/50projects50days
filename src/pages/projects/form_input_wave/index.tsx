import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.container}>
      <h1>Please Login</h1>
      <form>
        <div className={styles.form_control}>
          <input type="text" required />
          <label>
            {'Email'.split('').map((letter, idx) => {
              return (
                <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
                  {letter}
                </span>
              );
            })}
          </label>
        </div>

        <div className={styles.form_control}>
          <input type="password" required autoComplete="off" />
          <label>
            {'Password'.split('').map((letter, idx) => {
              return (
                <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
                  {letter}
                </span>
              );
            })}
          </label>
        </div>

        <button className={styles.btn}>Login</button>

        <p className={styles.text}>
          Don't have an account? <a>Register</a>{' '}
        </p>
      </form>
    </div>
  );
};
