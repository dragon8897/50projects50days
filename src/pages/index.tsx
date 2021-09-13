import { Link } from 'react-router-dom';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>50projects50days</h1>
      <div>
        <li>
          <Link to="/expanding_cards">expanding-cards</Link>
        </li>
        <li>
          <Link to="/progress_steps">progress-steps</Link>
        </li>
        <li>
          <Link to="/rotating_navigation">rotating-navigation</Link>
        </li>
      </div>
    </div>
  );
}
