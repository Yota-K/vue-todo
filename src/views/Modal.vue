<template>
  <div :class="isModalActive ? 'overlay' : ''"></div>
  <div class="container">
    <button class="modal-button" type="button" @click="toggleModal">モーダルを開く</button>
    <p>テストテストテストテストテストテストテストテストテストテスト</p>
    <p>テストテストテストテストテストテストテストテストテストテスト</p>
    <p>テストテストテストテストテストテストテストテストテストテスト</p>
    <Modal
      :is-modal-active="isModalActive"
      :is-set-first-value="setFirstValue"
      :is-set-second-value="setSecondValue"
      :is-set-third-value="setThirdValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { useModal } from '../composables/use-modal';
import Modal from '../components/Modal.vue';

export default defineComponent({
  components: {
    Modal,
  },
  setup() {
    const { state, toggleModal } = useModal();
    const {
      isModalActive,
      setFirstValue,
      setSecondValue,
      setThirdValue
    } = toRefs(state);

    return {
      isModalActive,
      setFirstValue,
      setSecondValue,
      setThirdValue,
      toggleModal,
    };
  },
});
</script>

<style lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  transition: all 0.8s;
}

.container {
  .modal-button {
    padding: 6px;
    border: none;
    border-radius: 5px;
    color: rgb(86 82 82);
    font-weight: bold;
    cursor: pointer;
    background: pink;
  }

  p {
    color: #000;
  }

  .modal {
    position: absolute;
    border: 2px solid rgb(107 107 107);
    background: #fff;
    width: 100%;
    max-width: 380px;
    bottom: 20px;
    left: 20px;
    z-index: 10000;
  }
}
</style>
