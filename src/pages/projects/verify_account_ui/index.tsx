import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

const COUNT = 6;

export default () => {
  const [index, setIndex] = useState<number>(0);
  const inputRefs: React.RefObject<HTMLInputElement>[] = Array(COUNT)
    .fill(0)
    .map((_) => {
      return useRef(null);
    });

  useEffect(() => {
    inputRefs[index].current!.value = '';
    inputRefs[index].current!.focus();
  }, [index]);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h2>Verify Your Account</h2>
        <p>
          We emailed you the six digit code to cool_guy@email.com <br /> Enter
          the code below to confirm your email address.
        </p>
        <div className={styles.code_container}>
          {inputRefs.map((inputRef, i) => {
            return (
              <input
                key={i}
                ref={inputRef}
                type="number"
                className={styles.code}
                placeholder="0"
                min="0"
                max="9"
                required
                onKeyDown={(e: React.KeyboardEvent) => {
                  const inputTarget: HTMLInputElement =
                    e.target as HTMLInputElement;
                  if (e.key === 'Backspace') {
                    if (inputTarget.value.length > 0) {
                      inputTarget.value = '';
                    } else {
                      setIndex(Math.max(index - 1, 0));
                    }
                  } else if (e.key >= '0' && e.key <= '9') {
                    e.preventDefault();
                    inputTarget.value = e.key;
                    if (index + 1 < COUNT) {
                      setIndex(index + 1);
                    }
                  } else {
                    e.preventDefault();
                    inputTarget.value = '';
                  }
                }}
              />
            );
          })}
        </div>
        <small className={styles.info}>
          This is design only. We didn't actually send you an email as we don't
          have your email, right?
        </small>
      </div>
    </div>
  );
};
