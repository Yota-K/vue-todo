import { reactive, toRefs } from 'vue'

type InputValueState = {
  inputValue: string;
}

export const useInputValue = () => {
  const state = reactive<InputValueState>({
    inputValue: '',
  });

  return {
    ...toRefs(state)
  }
}
