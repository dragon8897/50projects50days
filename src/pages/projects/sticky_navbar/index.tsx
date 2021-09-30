import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

export default () => {
  const navRef: React.RefObject<HTMLElement> = useRef(null);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const onContentScroll = (e: any) => {
      if (!navRef || !navRef.current) {
        return;
      }
      setActive(window.scrollY > navRef.current.offsetHeight + 150);
    };
    window.addEventListener('scroll', onContentScroll);
    return () => {
      window.removeEventListener('scroll', onContentScroll);
    };
  }, []);

  return (
    <div className={styles.box}>
      <nav
        className={styles.nav + (active ? ` ${styles.active}` : '')}
        ref={navRef}
      >
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <a href="/index.html">My Website</a>
          </h1>
          <ul>
            <li>
              <a className={styles.current}>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.hero}>
        <div className={styles.container}>
          <h1>Welcome To My Website</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            consequuntur?
          </p>
        </div>
      </div>

      <section className={styles.container + ' ' + styles.content}>
        <h2>Content One</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic
          quo in ipsum iste soluta eaque perferendis nihil recusandae dolore
          officia aperiam corporis similique. Facilis quos tempore labore totam!
          Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor,
          modi dolorem sit architecto, voluptate magni sunt unde est quas?
          Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur
          libero laboriosam ab eligendi omnis delectus earum labore, placeat
          officiis sint illum rem voluptas ipsum repellendus iste eius
          recusandae quae excepturi facere, iure rerum sequi? Illum velit
          delectus dicta et iste dolorum obcaecati minus odio eligendi!
        </p>

        <h3>Content Two</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          provident nostrum possimus inventore nisi laboriosam consequatur modi
          nulla eos, commodi, omnis distinctio! Maxime distinctio impedit
          provident, voluptates illo odio nostrum minima beatae similique a sint
          sapiente voluptatum atque optio illum est! Tenetur tempora doloremque
          quae iste aperiam hic cumque repellat?
        </p>
      </section>
    </div>
  );
};
