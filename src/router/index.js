import Vue from 'vue';
import Router from 'vue-router';

import * as pages from '../pages';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/typography' 
    },
    {
      path: '/typography',
      name: 'typography',
      component: pages.TypographyPage,
    },
    {
      path: '/components/button',
      name: 'button',
      component: pages.ButtonPage,
    },
    {
      path: '/components/input',
      name: 'input',
      component: pages.InputPage,
    },
  ]
});
