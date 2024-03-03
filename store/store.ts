import { create } from "zustand";
import { TodoItem } from "../model/todo";

interface TodoStore {
  todos: TodoItem[];
  addTodo: (todo: TodoItem) => void;
  archiveTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo: TodoItem) =>
    set((state) => ({ todos: [...state.todos, todo] })),
  archiveTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, archived: true } : todo
      ),
    })),
  deleteTodo: (id: number) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  toggleTodo: (id: number) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
}));

export default useTodoStore;
