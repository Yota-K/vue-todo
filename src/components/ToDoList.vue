<template>
  <div class="todo">
    <h2>TODOを追加</h2>
    <div class="input-wrap">
      <input type="text" v-model="state.inputValue">
      <button @click="addTodo">TODOを追加</button>
    </div>
    <p>入力した値: {{ state.inputValue }}</p>
    <h2>TODOを絞り込む</h2>
    <div class="input-wrap">
      <input type="text" placeholder="フィルタテキスト" v-model="state.filterValue">
    </div>
    <ul v-if="filterTodoItems.length">
      <ToDoItem
        v-for="todo in filterTodoItems"
        :key="todo.id"
        :id="todo.id"
        :done="todo.done"
        :text="todo.text"
        @toggle-todo="toggleTodo"
        @remove-todo="removeTodo"
      />
    </ul>
    <p v-else>TODOが登録されていません</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToDoItem from '../components/ToDoItem.vue'
import { useTodo } from '../composable/todo/use-todo';

export default defineComponent({
  name: 'ToDoList',
  components: {
    ToDoItem
  },
  setup() {
    const {
      state,
      addTodo,
      removeTodo,
      toggleTodo,
      filterTodoItems
    } = useTodo();

    return {
      state,
      addTodo,
      removeTodo,
      toggleTodo,
      filterTodoItems
    }
  },
})
</script>

<style lang="scss" scoped>
.todo {
  .input-wrap {
    input {
      padding: 8px;
      border: 1px solid rgb(221, 221, 221);
      border-radius: 5px;
    }

    button {
      padding: 6px;
      border: none;
      border-radius: 5px;
      color: #fff;
      background-color: #eb6100;
      margin-left: 12px;
      cursor: pointer;
    }
  }

  ul {
    max-width: 600px;
    margin: 20px auto;
  }
}
</style>
