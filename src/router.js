import { createRouter, createWebHistory } from 'vue-router';

const HelloWorld = () => import('./components/HelloWorld.vue');

const routes = [
  {
    path: '',
    component: HelloWorld,
    name: 'HelloWorld'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
