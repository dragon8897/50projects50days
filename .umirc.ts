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
  ],
  fastRefresh: {},
});
