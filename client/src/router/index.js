import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import ExtensionList from '@/components/ExtensionList.vue';
import ExtensionDetails from '@/components/ExtensionDetails.vue';
import Upload from '@/components/Upload.vue';
import ExtensionIdeas from '@/components/ExtensionIdeas.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/extensions',
    name: 'extensionList',
    component: ExtensionList,
    props: true,
  },
  {
    path: '/extensions/:id',
    name: 'extensionDetails',
    component: ExtensionDetails,
    props: true,
  },
  {
    path: '/upload',
    name: 'upload',
    component: Upload,
  },
  {
    path: '/extension-ideas',
    name: 'extension-ideas',
    component: ExtensionIdeas,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
