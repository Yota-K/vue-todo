<template>
  <div v-if="setFirstValue && setSecondValue" class="modal">
    <p>3枚目</p>
    <button @click="$emit('closeModal')">閉じる</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { useModal } from '../../composables/use-modal';

export default defineComponent({
  emits: ['closeModal'],
  setup() {
    const { state,  } = useModal();
    const { setFirstValue, setSecondValue } = toRefs(state);

    return {
      setFirstValue,
      setSecondValue,
    };
  },
});
</script>
