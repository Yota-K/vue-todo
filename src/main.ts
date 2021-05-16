import { provide, createApp } from 'vue'
import { todoState, todoStateKey } from './composable/todo/todo';
import App from './App.vue'
import './index.css'

createApp(App).provide(todoStateKey, todoState()).mount('#app')
