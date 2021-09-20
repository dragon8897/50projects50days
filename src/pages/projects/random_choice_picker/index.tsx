import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [tags, setTags] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(-1);
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    const count = tags.length;
    if (count < 1) {
      return;
    }

    let total: number = Math.floor(Math.random() * 100 + 30);

    window.clearInterval(timer);
    setTimer(
      window.setInterval(() => {
        total--;
        if (total < 0) {
          window.clearInterval(timer);
          return;
        }
        setIndex((prev) => {
          return (prev + 1) % count;
        });
      }, 100),
    );
  }, [tags]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h3>
          Enter all of the choices divided by a comma (','). <br /> Press enter
          when you're done
        </h3>
        <textarea
          autoFocus
          placeholder="Enter choices here..."
          onKeyUp={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter') {
              const target: HTMLTextAreaElement =
                e.target as HTMLTextAreaElement;
              const input: string = target.value;
              target.value = '';
              const tags = input
                .split(',')
                .filter((tag) => tag.trim() !== '')
                .map((tag) => tag.trim());
              setTags(tags);
            }
          }}
        ></textarea>

        <div id="tags">
          {tags.map((tag, i) => {
            return (
              <span
                key={i}
                className={
                  styles.tag + (i === index ? ` ${styles.highlight}` : '')
                }
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
