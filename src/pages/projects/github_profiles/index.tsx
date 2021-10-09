import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

type UserInfo = {
  name: string;
  avatar_url: string;
  id: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
};

export default () => {
  const APIURL = 'https://api.github.com/users/';

  const [name, setName] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [errMsg, setErrMsg] = useState<string>('');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const getInfo = async () => {
    const res = await fetch(APIURL + search);
    if (res.status !== 200) {
      setErrMsg('No profile with this username');
      setUserInfo(null);
      return;
    }
    setErrMsg('');
    const data = await res.json();
    setUserInfo(data as UserInfo);
  };

  useEffect(() => {
    if (search.length === 0) {
      return;
    }
    getInfo();
  }, [search]);

  return (
    <div className={styles.container}>
      <form
        className={styles.user_form}
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          if (name.length === 0) {
            return;
          }
          setSearch(name);
          setName('');
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent) => {
            setName((e.target as HTMLInputElement).value);
          }}
          placeholder="Search a Github User"
        />
      </form>

      <main id="main">
        {errMsg.length > 0 && (
          <div className={styles.card}>
            <h1>{errMsg}</h1>
          </div>
        )}
        {userInfo && (
          <div className={styles.card}>
            <div>
              <img
                src={userInfo.avatar_url}
                alt={userInfo.name}
                className={styles.avatar}
              />
            </div>
            <div className={styles.user_info}>
              <h2>{userInfo.name}</h2>
              {userInfo.bio && <p>{userInfo.bio}</p>}
              <ul>
                <li>
                  {userInfo.followers} <strong>Followers</strong>
                </li>
                <li>
                  {userInfo.following} <strong>Following</strong>
                </li>
                <li>
                  {userInfo.public_repos} <strong>Repos</strong>
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
