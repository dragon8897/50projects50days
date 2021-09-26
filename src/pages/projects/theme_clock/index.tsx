import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export default () => {
  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [date, setDate] = useState<number>(0);
  const [hoursForClock, setHoursForClock] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [ampm, setAmPm] = useState<string>('AM');

  const setTime = () => {
    const time = new Date();
    const hours = time.getHours();

    setDay(time.getDay());
    setMonth(time.getMonth());
    setDate(time.getDate());
    setHoursForClock(hours >= 13 ? hours % 12 : hours);
    setMinutes(time.getMinutes());
    setSeconds(time.getSeconds());
    setAmPm(hours >= 12 ? 'PM' : 'AM');
  };

  useEffect(() => {
    setTime();

    let t: number = 0;
    t = window.setInterval(() => {
      setTime();
    }, 1000);

    return () => {
      window.clearInterval(t);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.clock_container}>
        <div className={styles.clock}>
          <div
            className={styles.needle + ' ' + styles.hour}
            style={{
              transform: `translate(-50%, -100%) rotate(${
                hoursForClock * 30
              }deg)`,
            }}
          ></div>
          <div
            className={styles.needle + ' ' + styles.minute}
            style={{
              transform: `translate(-50%, -100%) rotate(${minutes * 6}deg)`,
            }}
          ></div>
          <div
            className={styles.needle + ' ' + styles.second}
            style={{
              transform: `translate(-50%, -100%) rotate(${seconds * 6}deg)`,
            }}
          ></div>
          <div className={styles.center_point}></div>
        </div>

        <div className={styles.time}>{`${hoursForClock}:${
          minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds} ${ampm}`}</div>
        <div className={styles.date}>
          {`${days[day]}, ${months[month]}`}
          <span className={styles.circle}>{date}</span>
        </div>
      </div>
    </div>
  );
};
