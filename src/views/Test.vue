<template>
  <TodoSample />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoSample from '../components/TodoSample.vue';

export default defineComponent({
  components: {
    TodoSample,
  },
})
</script>
