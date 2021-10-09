import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
  ];

  const types = ['info', 'success', 'error'];

  const [toasts, setToasts] = useState<Array<{ msg: string; type: string }>>(
    [],
  );

  return (
    <div className={styles.container}>
      <div className={styles.toasts}>
        {toasts.map((t, i) => {
          return (
            <div
              key={i}
              className={
                styles.toast +
                ' ' +
                (t.type == 'info'
                  ? styles.info
                  : t.type == 'success'
                  ? styles.success
                  : styles.error)
              }
            >
              {t.msg}
            </div>
          );
        })}
      </div>
      <button
        className={styles.btn}
        onClick={() => {
          setToasts([
            ...toasts,
            {
              msg: messages[Math.floor(Math.random() * messages.length)],
              type: types[Math.floor(Math.random() * types.length)],
            },
          ]);
          setTimeout(() => {
            setToasts((prev) => [...prev.slice(1)]);
          }, 3000);
        }}
      >
        Show Notification
      </button>
    </div>
  );
};
