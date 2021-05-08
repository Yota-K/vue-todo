<template>
  <li>
    <span v-if="done" v-bind:class="['done']">✔︎</span>
    <span>{{ id }}, {{ text }}</span>
  </li>
</template>

<style lang="scss" scoped>
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
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: Number
    },
    done: {
      type: Boolean
    },
    text: {
      type: String
    }
  }
})
</script>
