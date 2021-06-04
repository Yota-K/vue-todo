import { reactive } from 'vue';

type ModalType = {
  isModalActive: boolean;
  setFirstValue: string;
  setSecondValue: string;
  setThirdValue: string;
};

export const useModal = () => {
  const state = reactive<ModalType>({
    isModalActive: false,
    setFirstValue: '',
    setSecondValue: '',
    setThirdValue: '',
  });

  // モーダルのON・OFF切り替え
  const toggleModal = () => {
    if (state.isModalActive === false) {
      state.isModalActive = true;
    } else {
      state.isModalActive = false;
    }
  }

  return {
    state,
    toggleModal,
  }
};
