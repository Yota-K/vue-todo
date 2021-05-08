<template>
  <div class="todo">
    <input type="text" v-model="inputValue">
    <p>入力した値: {{ inputValue }}</p>
    <button v-on:click="handleClick">TODOを追加</button>
    <ul>
      <li
        v-for="todo in todoItems"
        v-bind:key="todo.id"
        v-on:click="todo.done = !todo.done"
      >
        <span v-if="todo.done" v-bind:class="['done']">✔︎</span>
        <span>{{ todo.id }}, {{ todo.text }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.todo {
  ul {
    max-width: 600px;
    margin: 20px auto;

    li {
      cursor: pointer;
      text-align: left;

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
</style>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ToDoList',
  // data・・・基本的なプロパティの定義
  // dataプロパティに変更が起こるとVue.jsが検知して再レンダリングが行われる
  // Reactでいうstate的なやつ？
  data() {
    return {
      inputValue: '',
      todoItems: [
        {
          id: 1,
          done: false,
          text: 'Test'
        },
      ]
    }
  },
  // methods・・・コンポーネント内で使用可能なメソッドとして定義できる
  methods: {
    handleClick() {
      if (!this.inputValue) {
        alert('値が入力されていません')
        this.inputValue = ''
        
        return
      }

      this.todoItems.push({
        id: this.todoItems.length + 1,
        done: false,
        text: this.inputValue
      })

      this.inputValue = ''
    }
  }
})
</script>
