<template>
  <div class="todo">
    <h2>TODOを追加</h2>
    <div class="input-wrap">
      <input type="text" v-model="state.inputValue">
      <button @click="handleClick">TODOを追加</button>
    </div>
    <p>入力した値: {{ state.inputValue }}</p>
    <h2>TODOを絞り込む</h2>
    <div class="input-wrap">
      <input type="text" placeholder="フィルタテキスト" v-model="state.filterValue">
    </div>
    <ul>
      <ToDoItem
        v-for="todo in filterTodoItems"
        :key="todo.id"
        :id="todo.id"
        :done="todo.done"
        :text="todo.text"
        @toggle="toggleTodo"
        @remove="removeTodo"
      />
    </ul>
  </div>
</template>

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

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'
import ToDoItem from '../components/ToDoItem.vue'

type TodoState = {
  inputValue: string;
  todoItems: {
    id: number;
    done: boolean;
    text: string;
  }[]
  filterValue: string;
}

export default defineComponent({
  name: 'ToDoList',
  components: {
    ToDoItem
  },
  setup() {
    // コンポーネントのローカルStateを定義できる
    const state = reactive<TodoState>({
      inputValue: '',
      todoItems: [
        {
          id: 1,
          done: false,
          text: 'Test'
        },
      ],
      filterValue: '',
    })

    const handleClick = () => {
      if (!state.inputValue) {
        alert('値が入力されていません')
        state.inputValue = ''
        
        return
      }

      state.todoItems.push({
        id: state.todoItems.length + 1,
        done: false,
        text: state.inputValue
      })

      state.inputValue = ''
    }

    const toggleTodo = (id: number) => {
      const todo = state.todoItems.find(todo => todo.id === id)
      if (!todo) return
      todo.done = !todo.done
    }

    const removeTodo = (id: number) => {
      state.todoItems = state.todoItems.filter(todo => todo.id !== id)
    }

    const filterTodoItems = computed(() => {
      // filterValueが空っぽの時は、todoItems（既存の配列）を返す
      if (!state.filterValue) {
        return state.todoItems
      }

      return state.todoItems.filter((todo) => {
        return todo.text.includes(state.filterValue)
      });
    })

    return {
      state,
      handleClick,
      toggleTodo,
      removeTodo,
      filterTodoItems
    }
  },
})
</script>
