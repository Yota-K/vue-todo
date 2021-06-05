<template>
  <div v-if="setFirstValue" class="modal">
    <p>2枚目</p>
    <button @click="$emit('closeModal')">閉じる</button>
    <button @click="secondModalFunc">次へ進む</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { useModal } from '../../composables/use-modal';

export default defineComponent({
  emits: ['closeModal'],
  setup() {
    const { state, secondModalFunc } = useModal();
    const { setFirstValue } = toRefs(state);

    return {
      setFirstValue,
      secondModalFunc,
    };
  },
});
</script>
