import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [index, setIndex] = useState<number>(0);
  const [hover, setHover] = useState<number>(-1);
  const [inDrag, setInDrag] = useState<boolean>(false);
  const emptys: any[] = Array(5).fill(0);

  return (
    <div className={styles.container}>
      {emptys.map((_, i) => {
        return (
          <div
            key={i}
            className={styles.empty + (i === hover ? ` ${styles.hovered}` : '')}
            onDragOver={(e: React.DragEvent) => {
              e.preventDefault();
            }}
            onDragEnter={(e: React.DragEvent) => {
              e.preventDefault();
              setHover(i);
            }}
            onDragLeave={() => {
              setHover(-1);
            }}
            onDrop={() => {
              setIndex(i);
              setHover(-1);
              setInDrag(false);
            }}
          >
            {i === index && (
              <div
                className={styles.fill + (inDrag ? ` ${styles.hold}` : '')}
                draggable="true"
                onDragStart={() => {
                  setInDrag(true);
                }}
                onDragEnd={() => {
                  setInDrag(false);
                }}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};
