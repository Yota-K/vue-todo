import { reactive, InjectionKey, computed } from 'vue'

// TODOの型を定義
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
  // 管理したいステートを定義
  const state = reactive<TodoState>({
    inputValue: '',
    todoItems: [],
    filterValue: '',
  });

  // TODO追加
  const addTodo = () => {
    if (!state.inputValue) {
      alert('値が入力されていません');
      return;
    };

    state.todoItems = [...state.todoItems, {
      id: state.todoItems.length + 1,
      done: false,
      text: state.inputValue
    }];

    state.inputValue = '';
  }

  // TODOを削除
  const removeTodo = (id: number) => {
    state.todoItems = state.todoItems.filter(todo => todo.id !== id)
  }

  // TODOのチェック
  const toggleTodo = (id: number) => {
    const todo = state.todoItems.find(todo => todo.id === id);

    if (!todo) return;

    todo.done = !todo.done;
  }

  // TODOの絞り込み検索
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

// ステートの型を生成
export type todoStateType = ReturnType<typeof todoState>;

// provideメソッドに指定するInjectionKeyを指定
export const todoStateKey: InjectionKey<todoStateType> = Symbol('todoState');
