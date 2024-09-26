import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Feature from './pages/Feature.vue';

const routes = [
{ path: '/', component: Feature },
  { path: '/home', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;