import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Feature from './views/Feature.vue';

const routes = [
{ path: '/GreenHomesAssessment', component: Feature },
  { path: '/home', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;