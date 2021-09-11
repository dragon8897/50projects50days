import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/expanding_cards', component: '@/pages/projects/expanding_cards' },
  ],
  fastRefresh: {},
});
