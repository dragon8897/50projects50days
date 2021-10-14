import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

const scale = (
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number,
): number => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

export default () => {
  const minVal = 0;
  const maxVal = 100;

  const labelRef: React.RefObject<HTMLLabelElement> = useRef(null);
  const [value, setValue] = useState<number>((minVal + maxVal) / 2);
  const [left, setLeft] = useState<number>(110);

  useEffect(() => {
    const label = labelRef.current;
    if (label == null) {
      return;
    }
    const parent = label.parentElement;
    if (parent == null) {
      return;
    }
    setLeft(
      value * (parent.clientWidth / maxVal) -
        label.clientWidth / 2 +
        scale(value, minVal, maxVal, 10, -10),
    );
  }, [value]);

  return (
    <div className={styles.body}>
      <h2 className={styles.h2}>Custom Range Slider</h2>
      <div className={styles.range_container}>
        <input
          className={styles.input}
          type="range"
          id="range"
          min={minVal}
          max={maxVal}
          onInput={(e: React.FormEvent) => {
            const input: HTMLInputElement = e.target as HTMLInputElement;
            setValue(parseInt(input.value));
          }}
        />
        <label htmlFor="range" ref={labelRef} style={{ left: `${left}px` }}>
          {value}
        </label>
      </div>
    </div>
  );
};
