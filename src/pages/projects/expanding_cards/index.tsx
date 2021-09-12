import { useState } from 'react';
import styles from './index.less';

export default () => {
  const images: { name: string; url: string }[] = [
    {
      name: 'Explore The World',
      url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      name: 'Wild Forest',
      url: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      name: 'Sunny Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    },
    {
      name: 'City on Winter',
      url: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    },
    {
      name: 'Mountains - Clouds',
      url: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
  ];
  const [index, setIndex] = useState<number>(0);
  return (
    <div className={styles.container}>
      {images.map((value, i) => (
        <div
          className={styles.panel + (i === index ? ` ${styles.active}` : '')}
          style={{
            backgroundImage: `url("${value.url}")`,
          }}
          onClick={() => {
            setIndex(i);
          }}
        >
          <h3>{value.name}</h3>
        </div>
      ))}
    </div>
  );
};
