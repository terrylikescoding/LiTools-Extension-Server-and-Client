import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import ExtensionList from '@/components/ExtensionList.vue';
import ExtensionDetails from '@/components/ExtensionDetails.vue';
import Upload from '@/components/Upload.vue';
import ExtensionIdeas from '@/components/ExtensionIdeas.vue';
import Login from '@/components/Login.vue';
import AdminPanel from '@/components/AdminPanel.vue';
import Register from '@/components/Register.vue';
import DownloadTable from '@/components/DownloadTable.vue';



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
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/admin-panel',
    name: 'admin-panel',
    component: AdminPanel,
  },
  {
    path: '/download',
    name: 'download',
    component: DownloadTable,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
