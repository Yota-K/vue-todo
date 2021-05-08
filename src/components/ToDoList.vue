<template>
  <input type="text" v-model="inputValue">
  <p>入力した値: {{ inputValue }}</p>
  <button v-on:click="handleClick">TODOを追加</button>
  <ul>
    <!-- 分割代入で指定可能 -->
    <li v-for="{id, text} in todoItems" v-bind:key="id">
      {{ id }}
      {{ text }}
    </li>
  </ul>
</template>

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
      todoItems: []
    }
  },
  // methods・・・コンポーネント内で使用可能なメソッドとして定義できる
  methods: {
    handleClick() {
      if (!this.inputValue) {
        alert('値が入力されていません');
        this.inputValue = '';
        
        return;
      }

      this.todoItems.push({
        id: this.todoItems.length + 1,
        text: this.inputValue
      })

      this.inputValue = ''
    }
  }
})
</script>
