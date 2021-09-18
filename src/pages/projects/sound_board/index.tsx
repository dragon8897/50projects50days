import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [index, setIndex] = useState<number>(-1);
  const names: string[] = [
    'applause',
    'boo',
    'gasp',
    'tada',
    'victory',
    'wrong',
  ];
  const sounds: {
    ref: React.RefObject<HTMLAudioElement>;
    name: string;
  }[] = names.map((name) => {
    return {
      ref: useRef(null),
      name,
    };
  });

  useEffect(() => {
    sounds.forEach(async (sound, i) => {
      if (sound.ref == null || sound.ref.current == null) {
        return;
      }
      if (i == index) {
        sound.ref.current?.play();
      } else {
        sound.ref.current?.pause();
        sound.ref.current!.currentTime = 0;
      }
    });
  }, [index]);

  return (
    <div className={styles.container}>
      {sounds.map((sound, i) => {
        return (
          <audio
            key={i}
            ref={sound.ref}
            src={`/sounds/${sound.name}.mp3`}
          ></audio>
        );
      })}
      <div>
        {sounds.map((sound, i) => {
          return (
            <button
              key={i}
              className={styles.btn}
              onClick={() => {
                setIndex(i);
              }}
            >
              {sound.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
