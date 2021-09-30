import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const containerRef: React.RefObject<HTMLDivElement> = useRef(null);
  const [index, setIndex] = useState<number>(0);
  const [slideHeight, setSlideHeight] = useState<number>(0);
  const config: { color: string; title: string; sub: string; img: string }[] = [
    {
      color: '#FD3555',
      title: 'Nature flower',
      sub: 'all in pink',
      img: 'https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80',
    },
    {
      color: '#2A86BA',
      title: 'Bluuue Sky',
      sub: "with it's mountains",
      img: 'https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80',
    },
    {
      color: '#252E33',
      title: 'Lonely castle',
      sub: 'in the wilderness',
      img: 'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80',
    },
    {
      color: '#FFB866',
      title: 'Flying eagle',
      sub: 'in the sunset',
      img: 'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80',
    },
  ];

  useEffect(() => {
    if (containerRef == null || containerRef.current == null) {
      return;
    }
    setSlideHeight(index * containerRef.current.clientHeight);
  }, [index]);

  return (
    <div className={styles.container}>
      <div className={styles.slider_container} ref={containerRef}>
        <div
          className={styles.left_slide}
          style={{
            top: `-${(config.length - 1) * 100}vh`,
            transform: `translateY(${slideHeight}px)`,
          }}
        >
          {config.map((c, i) => {
            return (
              <div key={i} style={{ backgroundColor: c.color }}>
                <h1>{c.title}</h1>
                <p>{c.sub}</p>
              </div>
            );
          })}
        </div>
        <div
          className={styles.right_slide}
          style={{ transform: `translateY(-${slideHeight}px)` }}
        >
          {config.map((c, i) => {
            return (
              <div key={i} style={{ backgroundImage: `url('${c.img}')` }}></div>
            );
          })}
        </div>
        <div className={styles.action_buttons}>
          <button
            className={styles.down_button + ' ' + styles.button}
            onClick={() => {
              setIndex((index - 1 + config.length) % config.length);
            }}
          ></button>
          <button
            className={styles.up_button + ' ' + styles.button}
            onClick={() => {
              setIndex((index + 1) % config.length);
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};
