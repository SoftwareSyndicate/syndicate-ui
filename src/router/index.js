import Vue from 'vue';
import Router from 'vue-router';

import * as pages from '../pages';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'general',
      redirect: '/general/layout' 
    },
    {
      path: '/general/typography',
      name: 'typography',
      component: pages.TypographyPage,
    },
    {
      path: '/general/layout',
      name: 'layout',
      component: pages.LayoutPage,
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
    {
      path: '/components/checkbox',
      name: 'checkbox',
      component: pages.CheckboxPage,
    },

  ]
});
