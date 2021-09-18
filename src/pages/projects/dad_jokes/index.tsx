import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const [joke, setJoke] = useState<string>('// Joke goes here');

  const generateJoke = async () => {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    setJoke(data.joke);
  };

  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h3>Don't Laugh Challenge</h3>
        <div className="joke">{joke}</div>
        <button id="jokeBtn" className="btn" onClick={generateJoke}>
          Get Another Joke
        </button>
      </div>
    </div>
  );
};
