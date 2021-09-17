import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.container}>
      <h1>Please Login</h1>
      <form>
        <div className={styles.form_control}>
          <input type="text" required />
          <label>Email</label>
        </div>

        <div className={styles.form_control}>
          <input type="password" required autoComplete="off" />
          <label>Password</label>
        </div>

        <button className={styles.btn}>Login</button>

        <p className={styles.text}>
          Don't have an account? <a>Register</a>{' '}
        </p>
      </form>
    </div>
  );
};
