import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Feature from './views/Feature.vue';
import House from './views/House.vue';

const routes = [
  { path: '/GreenHomesAssessment', component: Feature },
  { path: '/home', component: Home },
  { path: '/house', component: House },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;