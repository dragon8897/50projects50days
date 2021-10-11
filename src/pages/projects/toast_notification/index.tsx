import { useCallback } from 'react';
import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

function useTimeout(cb: () => void, delay: number) {
  const ref = useRef<() => void>();

  useEffect(() => {
    ref.current = cb;
  }, [cb]);

  useEffect(() => {
    const timer = setTimeout(() => ref.current!(), delay);
    return () => clearTimeout(timer);
  }, [delay]);
}

let tid: number = 0;

const Toast = (t: {
  msg: string;
  id: number;
  type: string;
  onRemove: (id: number) => void;
}) => {
  useTimeout(() => {
    t.onRemove(t.id);
  }, 3000);

  return (
    <div
      key={t.id}
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
};

export default () => {
  const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
  ];
  const types = ['info', 'success', 'error'];

  const [toasts, setToasts] = useState<
    Array<{ id: number; msg: string; type: string }>
  >([]);

  const removeToast = useCallback(
    (id) => {
      setToasts((prev) => prev.filter((t) => t.id != id));
    },
    [setToasts],
  );

  return (
    <div className={styles.container}>
      <div className={styles.toasts}>
        {toasts.map((t) => {
          return (
            <Toast
              key={t.id}
              id={t.id}
              msg={t.msg}
              type={t.type}
              onRemove={removeToast}
            ></Toast>
          );
        })}
      </div>
      <button
        className={styles.btn}
        onClick={() => {
          setToasts([
            ...toasts,
            {
              id: tid++,
              msg: messages[Math.floor(Math.random() * messages.length)],
              type: types[Math.floor(Math.random() * types.length)],
            },
          ]);
        }}
      >
        Show Notification
      </button>
    </div>
  );
};
