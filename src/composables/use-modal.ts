import { reactive, InjectionKey, inject } from 'vue';

type ModalType = {
  isModalActive: boolean;
  setFirstValue: string;
  setSecondValue: string;
  setThirdValue: string;
};

export const modalState = () => {
  console.log('init')
  const state = reactive<ModalType>({
    isModalActive: false,
    setFirstValue: '',
    setSecondValue: '',
    setThirdValue: '',
  });

  // モーダルのON・OFF切り替え
  const toggleModal = () => {
    console.log('モーダルON・OFF処理');
    if (state.isModalActive === false) {
      state.isModalActive = true;
    } else {
      state.isModalActive = false;
    }
  }

  const firstModalFunc = () => {
    console.log('1枚目の処理');
    state.setFirstValue = '1枚目完了済み';
  }

  const secondModalFunc = () => {
    console.log('2枚目の処理');
    state.setSecondValue = '2枚目完了済み';
  }

  return {
    state,
    toggleModal,
    firstModalFunc,
    secondModalFunc,
  }
};

// ステートの型を生成
type useModalStateType = ReturnType<typeof modalState>;

// provideメソッドに指定するInjectionKeyを指定
export const useModalStateKey: InjectionKey<useModalStateType> = Symbol('useModalState');

export const useModal = () => {
  const state = inject(useModalStateKey);

  if (!state) {
    throw new Error('NO Global Key')
  }

  return state;
}
