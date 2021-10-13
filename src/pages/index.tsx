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
          <li>
            <Link to="/drink_water">drink_water</Link>
          </li>
          <li>
            <Link to="/background_slider">background_slider</Link>
          </li>
          <li>
            <Link to="/theme_clock">theme_clock</Link>
          </li>
          <li>
            <Link to="/button_ripple_effect">button_ripple_effect</Link>
          </li>
          <li>
            <Link to="/drag_n_drop">drag_n_drop</Link>
          </li>
          <li>
            <Link to="/drawing_app">drawing_app</Link>
          </li>
          <li>
            <Link to="/kinetic_loader">kinetic_loader</Link>
          </li>
          <li>
            <Link to="/content_placeholder">content_placeholder</Link>
          </li>
          <li>
            <Link to="/sticky_navbar">sticky_navbar</Link>
          </li>
          <li>
            <Link to="/double_vertical_slider">double_vertical_slider</Link>
          </li>
          <li>
            <Link to="/toast_notification">toast_notification</Link>
          </li>
          <li>
            <Link to="/github_profiles">github_profiles</Link>
          </li>
          <li>
            <Link to="/double_click_heart">double_click_heart</Link>
          </li>
          <li>
            <Link to="/auto_text_effect">auto_text_effect</Link>
          </li>
          <li>
            <Link to="/password_generator">password_generator</Link>
          </li>
          <li>
            <Link to="/good_cheap_fast">good_cheap_fast</Link>
          </li>
          <li>
            <Link to="/notes_app">notes_app</Link>
          </li>
          <li>
            <Link to="/animated_countdown">animated_countdown</Link>
          </li>
          <li>
            <Link to="/image_carousel">image_carousel</Link>
          </li>
          <li>
            <Link to="/hoverboard">hoverboard</Link>
          </li>
          <li>
            <Link to="/pokedex">pokedex</Link>
          </li>
          <li>
            <Link to="/mobile_tab_navigation">mobile_tab_navigation</Link>
          </li>
          <li>
            <Link to="/3d_boxes_background">3d_boxes_background</Link>
          </li>
          <li>
            <Link to="/verify_account_ui">verify_account_ui</Link>
          </li>
          <li>
            <Link to="/live_user_filter">live_user_filter</Link>
          </li>
          <li>
            <Link to="/feedback_ui_design">feedback_ui_design</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}
