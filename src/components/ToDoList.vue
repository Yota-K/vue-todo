<template>
  <div class="todo">
    <h2>TODOを追加</h2>
    <div class="input-wrap">
      <input type="text" v-model="inputValue">
      <button v-on:click="handleClick">TODOを追加</button>
    </div>
    <h2>TODOを絞り込む</h2>
    <div class="input-wrap">
      <input type="text" placeholder="フィルタテキスト" v-model="filterValue">
    </div>
    <p>入力した値: {{ inputValue }}</p>
    <ul>
      <li
        v-for="todo in filterTodoItems"
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
      ],
      filterValue: '',
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
  },
  // 既存のデータになんらかの処理（フィルタリングしたり、計算したりしたいとき）を
  // 加えたい時に使う
  computed: {
    filterTodoItems() {
      // filterValueが空っぽの時は、todoItems（既存の配列）を返す
      if (!this.filterValue) {
        return this.todoItems
      }

      return this.todoItems.filter((todo) => {
        return todo.text.includes(this.filterValue)
      });
    }
  }
})
</script>
