import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ExtensionList from '@/views/ExtensionList.vue';
import ExtensionDetails from '@/views/ExtensionDetails.vue';
import Upload from '@/views/Upload.vue';
import ExtensionIdeas from '@/views/ExtensionIdeas.vue';
import Login from '@/views/Login.vue';
import AdminPanel from '@/views/AdminPanel.vue';
import Register from '@/views/Register.vue';
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
