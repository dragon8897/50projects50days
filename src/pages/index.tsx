import { Link } from 'react-router-dom';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>50projects50days</h1>
      <div>
        <ol>
          <li>
            <Link to="/expanding_cards">expanding_cards</Link>
          </li>
          <li>
            <Link to="/progress_steps">progress_steps</Link>
          </li>
          <li>
            <Link to="/rotating_navigation">rotating_navigation</Link>
          </li>
          <li>
            <Link to="/hidden_search">hidden_search</Link>
          </li>
          <li>
            <Link to="/blurry_loading">blurry_loading</Link>
          </li>
          <li>
            <Link to="/scroll_animation">scroll_animation</Link>
          </li>
          <li>
            <Link to="/split_landing_page">split_landing_page</Link>
          </li>
          <li>
            <Link to="/form_input_wave">form_input_wave</Link>
          </li>
          <li>
            <Link to="/sound_board">sound_board</Link>
          </li>
          <li>
            <Link to="/dad_jokes">dad_jokes</Link>
          </li>
          <li>
            <Link to="/event_keycodes">event_keycodes</Link>
          </li>
          <li>
            <Link to="/faq_collapse">faq_collapse</Link>
          </li>
          <li>
            <Link to="/random_choice_picker">random_choice_picker</Link>
          </li>
          <li>
            <Link to="/animated_navigation">animated_navigation</Link>
          </li>
          <li>
            <Link to="/incrementing_counter">incrementing_counter</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}
