<template>
  <div v-if="!setFirstValue !== '' && !setSecondValue !== ''" class="modal">
    <p>1枚目</p>
    <button type="button" @click="toggleModal">閉じる</button>
    <button type="button" @click="firstModalFunc">次へ進む</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { useModal } from '../../composables/use-modal';

export default defineComponent({
  emits: ['closeModal'],
  setup() {
    const { state, toggleModal, firstModalFunc } = useModal();
    const { setFirstValue, setSecondValue } = toRefs(state);

    return {
      toggleModal,
      setFirstValue,
      setSecondValue,
      firstModalFunc,
    };
  },
});
</script>
