import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Test from '../views/Test.vue';
import Modal from '../views/Modal.vue';
import Hoge from '../views/Hoge.vue';

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
  },
  {
    path: '/hoge',
    name: 'Hoge',
    component: Hoge,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
