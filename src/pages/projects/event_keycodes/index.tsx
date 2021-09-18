import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [key, setKey] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [keyCode, setKeyCode] = useState<number>(0);

  const onKeyDownEvent = (event: KeyboardEvent) => {
    setKey(event.key);
    setCode(event.code);
    setKeyCode(event.keyCode);
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDownEvent);
    return () => {
      window.removeEventListener('keydown', onKeyDownEvent);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div>
        {key.length == 0 ? (
          <div className={styles.key}>Press any key to get the keyCode</div>
        ) : (
          <div>
            <div className={styles.key}>
              {key}
              <small>key</small>
            </div>
            <div className={styles.key}>
              {keyCode}
              <small>keyCode</small>
            </div>
            <div className={styles.key}>
              {code}
              <small>code</small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
