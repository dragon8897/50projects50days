import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [list, setList] = useState<
    {
      content: string;
      completed: boolean;
    }[]
  >([]);
  const [value, setValue] = useState<string>('');

  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>todos</h1>
      <form
        id="form"
        className={styles.form}
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          if (value.length == 0) {
            return;
          }
          setList((prev) => [
            ...prev,
            {
              content: value,
              completed: false,
            },
          ]);
          setValue('');
        }}
      >
        <input
          type="text"
          className={styles.input}
          id="input"
          placeholder="Enter your todo"
          autoComplete="off"
          value={value}
          onChange={(e: React.ChangeEvent) => {
            const input: HTMLInputElement = e.target as HTMLInputElement;
            setValue(input.value);
          }}
        />

        <ul className={styles.todos} id="todos">
          {list.map((l, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  setList((prev) =>
                    prev.map((p, index) => {
                      return index === i
                        ? {
                            ...p,
                            completed: true,
                          }
                        : p;
                    }),
                  );
                }}
                onContextMenu={(e: React.MouseEvent) => {
                  e.preventDefault();
                  setList((prev) => prev.filter((p, index) => i !== index));
                }}
                className={l.completed ? styles.completed : ''}
              >
                {l.content}
              </li>
            );
          })}
        </ul>
      </form>
      <small className={styles.small}>
        Left click to toggle completed. <br /> Right click to delete todo
      </small>
    </div>
  );
};
