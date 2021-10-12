import React, { useEffect, useRef, useState } from 'react';
import { useCallback } from 'react';
import styles from './index.less';

let idx: number = 0;

const Node = (n: { id: number; onDelete: (id: number) => void }) => {
  const [lock, setLock] = useState<boolean>(false);
  const [content, setContent] = useState<string>('');

  console.log('refresh', n.id);

  return (
    <div className={styles.note}>
      <div className={styles.tools}>
        <button
          className={styles.edit}
          onClick={() => {
            setLock(!lock);
          }}
        >
          <i>$</i>
        </button>
        <button
          className={styles.delete}
          onClick={() => {
            n.onDelete(n.id);
          }}
        >
          <i>x</i>
        </button>
      </div>
      <div className={styles.main + (lock ? '' : ` ${styles.hidden}`)}>
        <p>{content}</p>
      </div>
      <textarea
        className={lock ? `${styles.hidden}` : ''}
        onInput={(e: React.FormEvent) => {
          setContent((e.target as HTMLTextAreaElement).value);
        }}
      ></textarea>
    </div>
  );
};

export default () => {
  const [notes, setNotes] = useState<
    {
      id: number;
    }[]
  >([]);

  const remoteNode = useCallback(
    (id) => {
      setNotes((prev) => prev.filter((p) => p.id != id));
    },
    [setNotes],
  );

  return (
    <div className={styles.body}>
      <button
        className={styles.add}
        onClick={() => {
          setNotes((prev) => [
            ...prev,
            {
              id: idx++,
            },
          ]);
        }}
      >
        <i>+</i> Add note
      </button>
      {notes.map((n) => {
        return <Node key={n.id} id={n.id} onDelete={remoteNode}></Node>;
      })}
    </div>
  );
};
