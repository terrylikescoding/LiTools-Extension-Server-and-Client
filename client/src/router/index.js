import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Extension from '../components/Extension.vue';
import Upload from '../components/Upload.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/extensions',
    name: 'Extensions',
    component: Extension,
    props: true,
  },
  {
    path: '/extensions/:id',
    name: 'extension',
    component: Extension,
    props: true,
  },
  {
    path: '/upload',
    name: 'upload',
    component: Upload,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
