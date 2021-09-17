import { useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [show, setShow] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.container}>
      <div className={styles.search + (show ? ` ${styles.active}` : '')}>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="Search..."
          autoFocus
        />
        <button
          className={styles.btn}
          onClick={() => {
            setShow(!show);
            if (!show) {
              inputRef.current?.focus();
            } else {
              inputRef.current?.blur();
            }
          }}
        >
          ?
        </button>
      </div>
    </div>
  );
};
