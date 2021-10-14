import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/expanding_cards',
      component: '@/pages/projects/expanding_cards/index',
    },
    {
      path: '/progress_steps',
      component: '@/pages/projects/progress_steps/index',
    },
    {
      path: '/rotating_navigation',
      component: '@/pages/projects/rotating_navigation/index',
    },
    {
      path: '/hidden_search',
      component: '@/pages/projects/hidden_search/index',
    },
    {
      path: '/blurry_loading',
      component: '@/pages/projects/blurry_loading/index',
    },
    {
      path: '/scroll_animation',
      component: '@/pages/projects/scroll_animation/index',
    },
    {
      path: '/split_landing_page',
      component: '@/pages/projects/split_landing_page/index',
    },
    {
      path: '/form_input_wave',
      component: '@/pages/projects/form_input_wave/index',
    },
    {
      path: '/sound_board',
      component: '@/pages/projects/sound_board/index',
    },
    {
      path: '/dad_jokes',
      component: '@/pages/projects/dad_jokes/index',
    },
    {
      path: '/event_keycodes',
      component: '@/pages/projects/event_keycodes/index',
    },
    {
      path: '/faq_collapse',
      component: '@/pages/projects/faq_collapse/index',
    },
    {
      path: '/random_choice_picker',
      component: '@/pages/projects/random_choice_picker/index',
    },
    {
      path: '/animated_navigation',
      component: '@/pages/projects/animated_navigation/index',
    },
    {
      path: '/incrementing_counter',
      component: '@/pages/projects/incrementing_counter/index',
    },
    {
      path: '/drink_water',
      component: '@/pages/projects/drink_water/index',
    },
    {
      path: '/background_slider',
      component: '@/pages/projects/background_slider/index',
    },
    {
      path: '/theme_clock',
      component: '@/pages/projects/theme_clock/index',
    },
    {
      path: '/button_ripple_effect',
      component: '@/pages/projects/button_ripple_effect/index',
    },
    {
      path: '/drag_n_drop',
      component: '@/pages/projects/drag_n_drop/index',
    },
    {
      path: '/drawing_app',
      component: '@/pages/projects/drawing_app/index',
    },
    {
      path: '/kinetic_loader',
      component: '@/pages/projects/kinetic_loader/index',
    },
    {
      path: '/content_placeholder',
      component: '@/pages/projects/content_placeholder/index',
    },
    {
      path: '/sticky_navbar',
      component: '@/pages/projects/sticky_navbar/index',
    },
    {
      path: '/double_vertical_slider',
      component: '@/pages/projects/double_vertical_slider/index',
    },
    {
      path: '/toast_notification',
      component: '@/pages/projects/toast_notification/index',
    },
    {
      path: '/github_profiles',
      component: '@/pages/projects/github_profiles/index',
    },
    {
      path: '/double_click_heart',
      component: '@/pages/projects/double_click_heart/index',
    },
    {
      path: '/auto_text_effect',
      component: '@/pages/projects/auto_text_effect/index',
    },
    {
      path: '/password_generator',
      component: '@/pages/projects/password_generator/index',
    },
    {
      path: '/good_cheap_fast',
      component: '@/pages/projects/good_cheap_fast/index',
    },
    {
      path: '/notes_app',
      component: '@/pages/projects/notes_app/index',
    },
    {
      path: '/animated_countdown',
      component: '@/pages/projects/animated_countdown/index',
    },
    {
      path: '/image_carousel',
      component: '@/pages/projects/image_carousel/index',
    },
    {
      path: '/hoverboard',
      component: '@/pages/projects/hoverboard/index',
    },
    {
      path: '/pokedex',
      component: '@/pages/projects/pokedex/index',
    },
    {
      path: '/mobile_tab_navigation',
      component: '@/pages/projects/mobile_tab_navigation/index',
    },
    {
      path: '/3d_boxes_background',
      component: '@/pages/projects/3d_boxes_background/index',
    },
    {
      path: '/verify_account_ui',
      component: '@/pages/projects/verify_account_ui/index',
    },
    {
      path: '/live_user_filter',
      component: '@/pages/projects/live_user_filter/index',
    },
    {
      path: '/feedback_ui_design',
      component: '@/pages/projects/feedback_ui_design/index',
    },
    {
      path: '/custom_range_slider',
      component: '@/pages/projects/custom_range_slider/index',
    },
    {
      path: '/quiz_app',
      component: '@/pages/projects/quiz_app/index',
    },
    {
      path: '/testimonial_box_switcher',
      component: '@/pages/projects/testimonial_box_switcher/index',
    },
  ],
  fastRefresh: {},
  chainWebpack: (config) => {
    config.module
      .rule('media')
      .test(/.mp3$/)
      .use('file-loader')
      .loader(require.resolve('file-loader'));
  },
});
