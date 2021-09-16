import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

type BoxType = {
  ref: React.RefObject<HTMLDivElement>;
  show: boolean;
};

export default () => {
  const triggle = window.innerHeight * 0.8;
  const origin: BoxType[] = [];
  for (let i = 0; i < 10; i++) {
    origin.push({
      ref: useRef<HTMLDivElement>(null),
      show: false,
    });
  }
  const [boxes, setBoxes] = useState<BoxType[]>(origin);

  useEffect(() => {
    const checkBox = () => {
      setBoxes(
        boxes.map((box) => {
          box.show = box.ref.current
            ? box.ref.current.getBoundingClientRect().top < triggle
            : false;
          return box;
        }),
      );
    };
    checkBox();
    window.addEventListener('scroll', checkBox);
    return () => {
      window.removeEventListener('scroll', checkBox);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>Scroll to see the animation</h1>
      {boxes.map((box, i) => {
        return (
          <div
            ref={box.ref}
            key={i}
            className={styles.box + (box.show ? ` ${styles.show}` : '')}
          >
            <h2>Content</h2>
          </div>
        );
      })}
    </div>
  );
};
