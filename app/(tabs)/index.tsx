import React, { useState, useMemo } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import SwipeableTodo from "../../components/SwipeableTodo";
import useTodoStore from "../../store/store";
import { TodoItem } from "../../model/todo";

const Index = ({ archived = false }: { archived: boolean }) => {
  const [nextId, setNextId] = useState(0);
  const [input, setInput] = useState("");
  const { toggleTodo, todos, archiveTodo } = useTodoStore((state) => state);
  const activeTodos = useMemo(
    () => todos.filter((todo) => todo.archived === false),
    [todos]
  );

  //アーカイブされた
  const handleArchive = (todo: TodoItem) => {
    archiveTodo(todo.id);
  };

  const addTodo = useTodoStore((state) => state.addTodo);

  //trimメソッドは文字列の両端の空白を削除する
  //文字数が0より大きい場合にnextIdをインクリメントして新しいTodoを追加
  const handleSubmit = () => {
    if (input.trim().length > 0) {
      setNextId(nextId + 1);
      addTodo({
        id: nextId,
        title: input.trim(),
        completed: false,
        archived: false,
      });
      setInput("");
    }
  };

  return (
    <View
      style={{
        marginTop: 20,
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "blue",
            borderRadius: 5,
            padding: 10,
            flex: 1,
            marginRight: 10,
          }}
          value={input}
          onChangeText={setInput}
          placeholder="Add a new todo..."
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#A4C6FF",
            borderRadius: 5,
            paddingHorizontal: 16,
            paddingVertical: 10,
          }}
          onPress={handleSubmit}
        >
          <Text
            style={{
              fontSize: 18,
            }}
          >
            Add
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={{
          marginTop: 20,
        }}
        data={activeTodos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SwipeableTodo
            item={item}
            archived={archived}
            toggleTodo={toggleTodo}
            handleArchive={handleArchive}
          />
        )}
      />
    </View>
  );
};

export default Index;
