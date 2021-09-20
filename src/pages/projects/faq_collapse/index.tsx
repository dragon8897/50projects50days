import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const list: { question: string; answer: string }[] = [
    {
      question: "Why shouldn't we trust atoms?",
      answer: 'They make up everything',
    },
    {
      question: 'What do you call someone with no body and no nose?',
      answer: 'Nobody knows.',
    },
    {
      question: "What's the object-oriented way to become wealthy?",
      answer: 'Inheritance.',
    },
  ];

  const [index, setIndex] = useState<number>(0);

  return (
    <div className={styles.container}>
      <h1>Frequently Asked Questions</h1>
      {list.map((qna, i) => {
        return (
          <div key={i} className={styles.faq_container}>
            <div
              className={styles.faq + (i == index ? ` ${styles.active}` : '')}
            >
              <h3 className={styles.faq_title}>{qna.question}</h3>

              <p className={styles.faq_text}>{qna.answer}</p>

              <button
                className={styles.faq_toggle}
                onClick={() => {
                  setIndex(i);
                }}
              >
                <i className={styles.fas + ' ' + styles.fa_chevron_down}></i>
                <i className={styles.fas + ' ' + styles.fa_times}></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
