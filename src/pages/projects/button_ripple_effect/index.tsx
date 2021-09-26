import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <button
        className={styles.ripple}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (show) {
            return;
          }
          const button: HTMLButtonElement = e.target as HTMLButtonElement;
          setTop(e.clientY - button.offsetTop);
          setLeft(e.clientX - button.offsetLeft);
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 500);
        }}
      >
        Click Me
        {show && (
          <span
            className={styles.circle}
            style={{ top: `${top}px`, left: `${left}px` }}
          ></span>
        )}
      </button>
    </div>
  );
};
