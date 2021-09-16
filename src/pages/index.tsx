import { Link } from 'react-router-dom';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>50projects50days</h1>
      <div>
        <ol>
          <li>
            <Link to="/expanding_cards">expanding-cards</Link>
          </li>
          <li>
            <Link to="/progress_steps">progress-steps</Link>
          </li>
          <li>
            <Link to="/rotating_navigation">rotating-navigation</Link>
          </li>
          <li>
            <Link to="/hidden_search">hidden-search</Link>
          </li>
          <li>
            <Link to="/blurry_loading">blurry-loading</Link>
          </li>
          <li>
            <Link to="/scroll_animation">scroll-animation</Link>
          </li>
          <li>
            <Link to="/split_landing_page">split-landing-page</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}
