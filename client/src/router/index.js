import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Extension from '../components/Extension.vue';
import Upload from '../components/Upload.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
