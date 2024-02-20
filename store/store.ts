import { create } from "zustand";

export interface TodoItem {
  id: number; //ID
  title: string; //タイトル
  completed: boolean; //完了したかどうか
  archived: boolean; //アーカイブされているかどうか
}

export interface State {
  todos: TodoItem[];
  addTodo: (title: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  archiveTodo: (id: number) => void;
  nextId: number;
}

const useStore = create<State>((set) => ({
  todos: [],
  nextId: 0,
  addTodo: (title: string) =>
    set((state) => ({
      todos: state.todos.concat([
        { id: state.nextId, title, completed: false, archived: false },
      ]),
      nextId: state.nextId + 1,
    })),
  deleteTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  toggleTodo: (id: number) =>
    set((state) => {
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        const newTodos = [...state.todos];
        newTodos[index] = {
          ...newTodos[index],
          completed: !newTodos[index].completed,
        };
        return { todos: newTodos };
      }
      return state;
    }),
  archiveTodo: (id: number) =>
    set((state) => {
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        const newTodos = [...state.todos];
        newTodos[index] = {
          ...newTodos[index],
          archived: true,
          completed: true,
        };
        return { todos: newTodos };
      }
      return state;
    }),
}));

export default useStore;
