import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

let idx: number = 0;

export default () => {
  const [notes, setNotes] = useState<
    {
      id: number;
      content: string;
      lock: boolean;
    }[]
  >([]);

  return (
    <div className={styles.body}>
      <button
        className={styles.add}
        onClick={() => {
          setNotes((prev) => [
            ...prev,
            {
              id: idx++,
              content: '',
              lock: false,
            },
          ]);
        }}
      >
        <i>+</i> Add note
      </button>
      {notes.map((n) => {
        return (
          <div key={n.id} className={styles.note}>
            <div className={styles.tools}>
              <button
                className={styles.edit}
                onClick={() => {
                  setNotes(
                    notes.map((note) =>
                      note.id === n.id
                        ? { ...note, lock: !note.lock }
                        : { ...note },
                    ),
                  );
                }}
              >
                <i>$</i>
              </button>
              <button
                className={styles.delete}
                onClick={() => {
                  setNotes((prev) => prev.filter((p) => p.id != n.id));
                }}
              >
                <i>x</i>
              </button>
            </div>
            <div className={styles.main + (n.lock ? '' : ` ${styles.hidden}`)}>
              <p>{n.content}</p>
            </div>
            <textarea
              className={n.lock ? `${styles.hidden}` : ''}
              onInput={(e: React.FormEvent) => {
                setNotes(
                  notes.map((note) =>
                    note.id === n.id
                      ? {
                          ...note,
                          content: (e.target as HTMLTextAreaElement).value,
                        }
                      : { ...note },
                  ),
                );
              }}
            ></textarea>
          </div>
        );
      })}
    </div>
  );
};
