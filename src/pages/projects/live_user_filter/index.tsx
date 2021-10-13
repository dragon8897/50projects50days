import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

type UserInfo = {
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
    country: string;
  };
  hide: boolean;
};

export default () => {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://randomuser.me/api?results=50');
      const { results } = await res.json();
      setUsers(results);
    };
    getData();
  }, []);

  useEffect(() => {
    if (users.length === 0) {
      return;
    }
    const lower = search.toLowerCase();
    setUsers((prev) =>
      prev.map((p) => {
        return {
          ...p,
          hide: !`${p.name.first}${p.name.last}`.toLowerCase().includes(lower),
        };
      }),
    );
  }, [search]);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h4 className={styles.title}>Live User Filter</h4>
          <small className={styles.subtitle}>
            Search by name and/or location
          </small>
          <input
            type="text"
            id="filter"
            placeholder="Search"
            onChange={(e: React.ChangeEvent) => {
              const input = e.target as HTMLInputElement;
              setSearch(input.value);
            }}
          />
        </header>

        <ul id="result" className={styles.user_list}>
          {users.length === 0 && (
            <li>
              <h3>Loading...</h3>
            </li>
          )}
          {users.map((u, i) => {
            return (
              <li key={i} className={u.hide ? styles.hide : ''}>
                <img src={u.picture.large} alt={u.name.first} />
                <div className={styles.user_info}>
                  <h4>
                    {u.name.first} {u.name.last}
                  </h4>
                  <p>
                    {u.location.city}, {u.location.country}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
