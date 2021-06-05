<template>
  <div :class="isModalActive ? 'overlay' : ''"></div>
    <div class="container">
      <button class="modal-button" type="button" @click="toggleModal">モーダルを開く</button>
      <p>テストテストテストテストテストテストテストテストテストテスト</p>
      <p>テストテストテストテストテストテストテストテストテストテスト</p>
      <p>テストテストテストテストテストテストテストテストテストテスト</p>
    <div :style="isModalActive ? { display: 'block' } : { display: 'none' }">
      <First @close-modal="toggleModal" />
      <Second @close-modal="toggleModal" />
      <Third @close-modal="toggleModal"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import First from '../components/modal/First.vue';
import Second from '../components/modal/Second.vue';
import Third from '../components/modal/Third.vue';
import { useModal } from '../composables/use-modal';

export default defineComponent({
  components: {
    First,
    Second,
    Third,
  },
  setup() {
    const { state, toggleModal } = useModal();
    const { isModalActive } = toRefs(state);

    return {
      isModalActive,
      toggleModal,
    }
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
