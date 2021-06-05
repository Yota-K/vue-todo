<template>
  <div :style="isModalActive ? { display: 'block' } : { display: 'none' }">
    <First @close-modal="$emit('closeModal')" />
    <Second @close-modal="$emit('closeModal')" />
    <Third @close-modal="$emit('closeModal')"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import First from '../components/modal/First.vue';
import Second from '../components/modal/Second.vue';
import Third from '../components/modal/Third.vue';

export default defineComponent({
  components: {
    First,
    Second,
    Third,
  },
  emits: ['closeModal'],
  props: {
    isModalActive: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
