import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

const quizData: {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correct: string;
}[] = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

export default () => {
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [answer, setAnswer] = useState<string>('');
  const [finished, setFinished] = useState<boolean>(false);

  return (
    <div className={styles.body}>
      <div className={styles.quiz_container} id="quiz">
        {finished ? (
          <div>
            <h2 className={styles.h2}>
              You answered {score} / {quizData.length} questions correctly
            </h2>
            <button
              className={styles.button}
              onClick={() => {
                location.reload();
              }}
            >
              Reload
            </button>
          </div>
        ) : (
          <div>
            <div className={styles.quiz_header}>
              <h2 className={styles.h2} id="question">
                {quizData[index].question}
              </h2>
              <ul className={styles.ul}>
                <li>
                  <input
                    type="radio"
                    name="answer"
                    id="a"
                    className={styles.answer}
                    checked={answer === 'a'}
                    onChange={(e: React.ChangeEvent) => {
                      const input: HTMLInputElement =
                        e.target as HTMLInputElement;
                      if (input.checked) {
                        setAnswer('a');
                      }
                    }}
                  />
                  <label htmlFor="a" id="a_text">
                    {quizData[index].a}
                  </label>
                </li>

                <li>
                  <input
                    type="radio"
                    name="answer"
                    id="b"
                    className={styles.answer}
                    checked={answer === 'b'}
                    onChange={(e: React.ChangeEvent) => {
                      const input: HTMLInputElement =
                        e.target as HTMLInputElement;
                      if (input.checked) {
                        setAnswer('b');
                      }
                    }}
                  />
                  <label htmlFor="b" id="b_text">
                    {quizData[index].b}
                  </label>
                </li>

                <li>
                  <input
                    type="radio"
                    name="answer"
                    id="c"
                    className={styles.answer}
                    checked={answer === 'c'}
                    onChange={(e: React.ChangeEvent) => {
                      const input: HTMLInputElement =
                        e.target as HTMLInputElement;
                      if (input.checked) {
                        setAnswer('c');
                      }
                    }}
                  />
                  <label htmlFor="c" id="c_text">
                    {quizData[index].c}
                  </label>
                </li>

                <li>
                  <input
                    type="radio"
                    name="answer"
                    id="d"
                    className={styles.answer}
                    checked={answer === 'd'}
                    onChange={(e: React.ChangeEvent) => {
                      const input: HTMLInputElement =
                        e.target as HTMLInputElement;
                      if (input.checked) {
                        setAnswer('d');
                      }
                    }}
                  />
                  <label htmlFor="d" id="d_text">
                    {quizData[index].d}
                  </label>
                </li>
              </ul>
            </div>
            <button
              className={styles.button}
              onClick={() => {
                if (answer == quizData[index].correct) {
                  setScore(score + 1);
                }
                if (index == quizData.length - 1) {
                  setFinished(true);
                } else {
                  setAnswer('');
                  setIndex(index + 1);
                }
              }}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
