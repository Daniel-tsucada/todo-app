import { FlatList } from "react-native-gesture-handler";
import React, { useMemo } from "react";
import useStore, { TodoItem } from "../../store/store";
import SwipeableTodo from "../../components/SwipeableTodo";

const Archive = ({ archived = true }: { archived: boolean }) => {
  const { toggleTodo, deleteTodo, todos } = useStore((state) => state);

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
        // ここで、FlatListコンポーネントを使用しています。
        // FlatListコンポーネントは、リストを表示するためのコンポーネントです。
        // dataプロパティには、リストに表示するデータを渡します。
        // keyExtractorプロパティには、リストに表示するデータのidを渡します。
        // renderItemプロパティには、リストに表示するデータを表示するためのコンポーネントを渡します。
        // ここでは、SwipeableTodoコンポーネントを渡しています。
        // SwipeableTodoコンポーネントは、リストに表示するデータを表示するためのコンポーネントです。
        // itemプロパティには、リストに表示するデータを渡します。
        // archivedプロパティには、リストに表示するデータがアーカイブされているかどうかを渡します。
        // toggleTodoプロパティには、リストに表示するデータのアーカイブを切り替えるための関数を渡します。
        // handleDeleteプロパティには、リストに表示するデータを削除するための関数を渡します。
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
