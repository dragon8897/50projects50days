import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from 'react';
import styles from './index.less';

function useInterval(cb: () => void, delay: number) {
  const ref = useRef<() => void>();

  useEffect(() => {
    ref.current = cb;
  }, [cb]);

  useEffect(() => {
    const timer = setInterval(() => ref.current!(), delay);
    return () => clearInterval(timer);
  }, [delay]);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

const Insect = (t: {
  id: number;
  x: number;
  y: number;
  image: string;
  name: string;
  onCatch: (id: number) => void;
  onRemove: (id: number) => void;
}) => {
  const [catched, setCatched] = useState<boolean>(false);

  useEffect(() => {
    if (!catched) {
      return;
    }
    t.onCatch(t.id);
    const to = setTimeout(() => {
      t.onRemove(t.id);
    }, 2000);
    return () => {
      clearTimeout(to);
    };
  }, [catched]);

  const Image = useMemo(() => {
    return (
      <img
        src={t.image}
        alt={t.name}
        style={{ transform: `rotate(${Math.random() * 360}deg)` }}
      ></img>
    );
  }, []);

  return (
    <div
      className={styles.insect + (catched ? ` ${styles.caught}` : '')}
      style={{ left: `${t.x}px`, top: `${t.y}px` }}
      onClick={() => {
        setCatched(true);
      }}
    >
      {Image}
    </div>
  );
};

let idx: number = 0;

export default () => {
  const [up, setUp] = useState<boolean>(false);
  const [start, setStart] = useState<boolean>(false);
  const [tick, setTick] = useState<string>('00:00');
  const [second, setSecond] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [index, setIndex] = useState<number>(-1);
  const [ids, setIds] = useState<
    {
      id: number;
      x: number;
      y: number;
    }[]
  >([]);

  const insects: {
    image: string;
    name: string;
  }[] = [
    { image: 'http://pngimg.com/uploads/fly/fly_PNG3946.png', name: 'fly' },
    {
      image: 'http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png',
      name: 'mosquito',
    },
    {
      image: 'http://pngimg.com/uploads/spider/spider_PNG12.png',
      name: 'spider',
    },
    {
      image: 'http://pngimg.com/uploads/roach/roach_PNG12163.png',
      name: 'roach',
    },
  ];

  useInterval(() => {
    if (!start) {
      return;
    }
    setSecond(second + 1);
  }, 1000);

  useEffect(() => {
    const m = Math.floor(second / 60);
    const s = second % 60;
    setTick(`${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`);
  }, [second]);

  const addInsect = () => {
    const { x, y } = getRandomLocation();
    setIds((prev) => [
      ...prev,
      {
        id: idx++,
        x: x,
        y: y,
      },
    ]);
  };

  useEffect(() => {
    if (!start) {
      return;
    }
    addInsect();
  }, [start]);

  const catchInsert = useCallback(
    (id) => {
      setScore((score) => score + 1);
      setTimeout(() => {
        addInsect();
      }, 1000);
      setTimeout(() => {
        addInsect();
      }, 1500);
    },
    [setIds],
  );

  const removeInsert = useCallback(
    (id) => {
      setIds((prev) => prev.filter((p) => p != id));
    },
    [setIds],
  );

  const TimerH3 = useMemo(() => {
    return <h3 className={styles.time}>Time: {tick}</h3>;
  }, [tick]);

  const ScoreH3 = useMemo(() => {
    return <h3 className={styles.score}>Score: {score}</h3>;
  }, [score]);

  const InsertDiv = useMemo(() => {
    return (
      <div>
        {ids.map((info, i) => {
          return (
            <Insect
              key={i}
              id={info.id}
              x={info.x}
              y={info.y}
              image={insects[index].image}
              name={insects[index].name}
              onCatch={catchInsert}
              onRemove={removeInsert}
            ></Insect>
          );
        })}
      </div>
    );
  }, [ids]);

  return (
    <div className={styles.body}>
      <div className={styles.screen + (up ? ` ${styles.up}` : '')}>
        <h1 className={styles.h1}>Catch The Insect</h1>
        <button
          className={styles.btn}
          onClick={() => {
            setUp(true);
          }}
        >
          Play Game
        </button>
      </div>

      <div className={styles.screen + (start ? ` ${styles.up}` : '')}>
        <h1 className={styles.h1}>What is your "favorite" insect?</h1>
        <ul className={styles.insects_list}>
          {insects.map((insect, i) => {
            return (
              <li key={i}>
                <button
                  className={styles.choose_insect_btn}
                  onClick={() => {
                    setIndex(i);
                    setStart(true);
                  }}
                >
                  <p>{insect.name}</p>
                  <img src={insect.image} alt={insect.name} />
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={styles.screen + ' ' + styles.game_container}
        id="game-container"
      >
        {TimerH3}
        {ScoreH3}
        <h5 id="message" className={styles.message}>
          Are you annnoyed yet? <br />
          You are playing an impossible game!!
        </h5>
        {InsertDiv}
      </div>
    </div>
  );
};
