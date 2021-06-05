import { provide, createApp } from 'vue'
import { todoState, todoStateKey } from './store/todo/todo';
import { modalState, useModalStateKey } from './composables/use-modal';
import App from './App.vue'
import './index.css'
import router from './router/index';

createApp(App).use(router).provide(todoStateKey, todoState()).provide(useModalStateKey, modalState()).mount('#app')
