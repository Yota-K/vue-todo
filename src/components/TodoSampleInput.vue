<template>
  <div class="todo">
    <h2>TODOを追加</h2>
    <div class="input-wrap">
      <input type="text" v-model="inputValue">
      <button @click="addTodoFunc" class="base-button">Todoを追加</button>
    </div>
    <p>入力した値: {{ inputValue }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTodo } from '../store/todo/use-todo';
import { useInputValue } from '../composables/use-input-value';

export default defineComponent({
  name: 'TodoSampleInput',
  setup() {
    const { inputValue } = useInputValue();
    const { addTodo } = useTodo();

    const addTodoFunc = () => {
      addTodo(inputValue.value);
      // inputの中身をリセットする
      inputValue.value = '';
    }

    return {
      inputValue,
      addTodoFunc,
    };
  },
});
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
      font-weight: bold;
      margin-left: 12px;
      cursor: pointer;
      background: #eb6100;
    }
  }
}
</style>
