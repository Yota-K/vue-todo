<template>
  <TodoSampleInput />
  <div class="todo">
    <ul v-if="state.todoItems.length">
      <li @click="toggleTodo(todo.id)" v-for="todo in state.todoItems" :key="todo">
        <div class="todo-text">
          <span v-if="todo.done" class="done">✔︎</span>
          <span>{{ todo.id }}, {{ todo.text }}</span>
        </div>
        <button @click="removeTodo(todo.id)" class="base-button">Todoを削除</button>
      </li>
    </ul>
    <p v-else>TODOが登録されていません</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTodo } from '../store/todo/use-todo';
import TodoSampleInput from '../components/TodoSampleInput.vue'

export default defineComponent({
  name: 'TodoSample',
  components: {
    TodoSampleInput,
  },
  setup() {
    const { state, removeTodo, toggleTodo } = useTodo();

    return {
      state,
      removeTodo,
      toggleTodo,
    };
  },
});
</script>

<style lang="scss" scoped>
.todo {
  ul {
    max-width: 800px;
    margin: 20px auto;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 12px 0;

      button {
        padding: 6px;
        border: none;
        border-radius: 5px;
        color: #fff;
        font-weight: bold;
        margin-left: 12px;
        cursor: pointer;
        background: #2c3e50;
      }

      .todo-text {
        cursor: pointer;
        text-align: left;
        width: 85%;
        padding: 8px;

        .done {
          margin-right: 10px;
        }

        &:hover {
          background: #ddd;
          transition: all 0.4s;
        }
      }
    }
  }
}
</style>
