import { reactive, InjectionKey, computed } from 'vue'

type TodoState = {
  inputValue: string;
  todoItems: {
    id: number;
    done: boolean;
    text: string;
  }[];
  filterValue: string;
}

export const todoState = () => {
  console.log('loaded todoState');

  const state = reactive<TodoState>({
    inputValue: '',
    todoItems: [],
    filterValue: '',
  });

  const addTodo = () => {
    if (!state.inputValue) {
      alert('値が入力されていません');
      state.inputValue = '';

      return;
    };

    state.todoItems = [...state.todoItems, {
      id: state.todoItems.length + 1,
      done: false,
      text: state.inputValue
    }];

    state.inputValue = '';
  }

  const removeTodo = (id: number) => {
    state.todoItems = state.todoItems.filter(todo => todo.id !== id)
  }

  const toggleTodo = (id: number) => {
    const todo = state.todoItems.find(todo => todo.id === id);

    if (!todo) return;

    todo.done = !todo.done;
  }

  const filterTodoItems = computed(() => {
    // filterValueが空っぽの時は、todoItems（既存の配列）を返す
    if (!state.filterValue) return state.todoItems
 
    return state.todoItems.filter(todo => {
      return todo.text.includes(state.filterValue)
    });
  })

  return {
    state,
    addTodo,
    removeTodo,
    toggleTodo,
    filterTodoItems,
  }
}

export type todoStateType = ReturnType<typeof todoState>;

export const todoStateKey: InjectionKey<todoStateType> = Symbol('todoState');
