<template>
  <div class="todo">
    <h2>TODOを追加</h2>
    <div class="input-wrap">
      <input type="text" v-model="inputValue">
      <button @click="addTodoFunc" class="base-button">Todoを追加</button>
    </div>
    <p>入力した値: {{ inputValue }}</p>
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
import { useInputValue } from '../composables/use-input-value';

export default defineComponent({
  name: 'TodoSample',
  setup() {
    // コンポーネントの中身は最低限のロジックのみを記述すれば済む！

    const { inputValue } = useInputValue();
    const { state, addTodo, removeTodo, toggleTodo } = useTodo();

    const addTodoFunc = () => {
      addTodo(inputValue.value);
      // inputの中身をリセットする
      inputValue.value = '';
    }

    return {
      inputValue,
      state,
      addTodoFunc,
      removeTodo,
      toggleTodo,
    };
  },
});
</script>

<style lang="scss" scoped>
.todo {
  .base-button {
    padding: 6px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    margin-left: 12px;
    cursor: pointer;
  }

  .input-wrap {
    input {
      padding: 8px;
      border: 1px solid rgb(221, 221, 221);
      border-radius: 5px;
    }

    button {
      @extend .base-button;
      background: #eb6100;
    }
  }

  ul {
    max-width: 800px;
    margin: 20px auto;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 12px 0;

      button {
        @extend .base-button;
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
