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
    {
      path: '/components/textarea',
      name: 'textarea',
      component: pages.TextAreaPage,
    },
    {
      path: '/components/select',
      name: 'select',
      component: pages.SelectPage,
    },
    {
      path: '/components/tag',
      name: 'tag',
      component: pages.TagPage,
    },

  ]
});
