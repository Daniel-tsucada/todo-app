// Archive.tsx
import React, { useMemo } from "react";
import { FlatList } from "react-native-gesture-handler";
import SwipeableTodo from "../../components/SwipeableTodo";
import useTodoStore from "../../store/store";
import { TodoItem } from "../../model/todo";

const Archive = ({ archived = true }: { archived: boolean }) => {
  const { toggleTodo, deleteTodo, todos } = useTodoStore((state) => state);

  const archivedTodos = useMemo(
    () => todos.filter((todo) => todo.archived === true),
    [todos]
  );

  const handleDelete = (todo: TodoItem) => {
    deleteTodo(todo.id);
  };

  return (
    <>
      <FlatList
        style={{
          marginTop: 20,
        }}
        data={archivedTodos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SwipeableTodo
            item={item}
            archived={archived}
            toggleTodo={toggleTodo}
            handleDelete={handleDelete}
          />
        )}
      />
    </>
  );
};

export default Archive;
