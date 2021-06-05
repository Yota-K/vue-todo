<template>
  <Modal />
</template>

<script lang="ts">
import { defineComponent,provide } from 'vue';
import { modalState, useModalStateKey } from '../composables/use-modal';
import Modal from '../components/Modal.vue';

export default defineComponent({
  components: {
    Modal,
  },
  setup() {
    provide(useModalStateKey, modalState());
    return {}
  }
});
</script>
