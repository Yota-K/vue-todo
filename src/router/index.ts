import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Test from '../views/Test.vue';
import Modal from '../views/Modal.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
