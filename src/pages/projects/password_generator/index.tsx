import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

function generatePassword(
  lower: boolean,
  upper: boolean,
  inNum: boolean,
  symbol: boolean,
  length: number,
): string {
  let generatedPassword = '';
  if (lower) {
    generatedPassword += getRandomLower();
  }
  if (upper) {
    generatedPassword += getRandomUpper();
  }
  if (inNum) {
    generatedPassword += getRandomNumber();
  }
  if (symbol) {
    generatedPassword += getRandomSymbol();
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

export default () => {
  const [pwLen, setPWLen] = useState<number>(20);
  const [upper, setUpper] = useState<boolean>(true);
  const [lower, setLower] = useState<boolean>(true);
  const [inNum, setInNum] = useState<boolean>(true);
  const [inSymbols, setInSymbols] = useState<boolean>(true);
  const [password, setPassword] = useState<string>(
    generatePassword(lower, upper, inNum, inSymbols, pwLen),
  );

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h2 className={styles.h2}>Password Generator</h2>
        <div className={styles.result_container}>
          <span id="result">{password}</span>
          <button
            className={styles.btn}
            onClick={() => {
              const el = document.createElement('textarea');
              el.value = password;
              document.body.appendChild(el);
              el.select();
              document.execCommand('copy');
              document.body.removeChild(el);
              alert('Password copied to clipboard!');
            }}
          ></button>
        </div>
        <div className={styles.settings}>
          <div className={styles.setting}>
            <label>Password Length</label>
            <input
              type="number"
              id="length"
              min="4"
              max="20"
              style={{ color: 'blue' }}
              value={pwLen}
              onChange={(e: React.ChangeEvent) => {
                setPWLen(parseInt((e.target as HTMLInputElement).value));
              }}
            />
          </div>
          <div className={styles.setting}>
            <label>Include uppercase letters</label>
            <input
              type="checkbox"
              checked={upper}
              onChange={(e: React.ChangeEvent) => {
                setUpper((e.target as HTMLInputElement).checked);
              }}
            />
          </div>
          <div className={styles.setting}>
            <label>Include lowercase letters</label>
            <input
              type="checkbox"
              checked={lower}
              onChange={(e: React.ChangeEvent) => {
                setLower((e.target as HTMLInputElement).checked);
              }}
            />
          </div>
          <div className={styles.setting}>
            <label>Include numbers</label>
            <input
              type="checkbox"
              checked={inNum}
              onChange={(e: React.ChangeEvent) => {
                setInNum((e.target as HTMLInputElement).checked);
              }}
            />
          </div>
          <div className={styles.setting}>
            <label>Include symbols</label>
            <input
              type="checkbox"
              checked={inSymbols}
              onChange={(e: React.ChangeEvent) => {
                setInSymbols((e.target as HTMLInputElement).checked);
              }}
            />
          </div>
        </div>

        <button
          className={styles.btn + ' ' + styles.btn_large}
          onClick={() => {
            setPassword(
              generatePassword(lower, upper, inNum, inSymbols, pwLen),
            );
          }}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};
