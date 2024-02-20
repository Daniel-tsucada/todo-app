import SwipeableTodo from "../../components/SwipeableTodo";
import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useMemo } from "react";
import useStore, { TodoItem } from "../../store/store";

const Index = ({ archived = false }: { archived: boolean }) => {
  const { toggleTodo, todos, archiveTodo } = useStore((state) => state);
  const unarchivedTodos = useMemo(
    () => todos.filter((todo) => todo.archived === false),
    [todos]
  );

  const handleArchive = (todo: TodoItem) => {
    archiveTodo(todo.id);
  };

  const [input, setInput] = useState("");

  const addTodo = useStore((state) => state.addTodo);

  const handleSubmit = () => {
    if (input.trim().length > 0) {
      addTodo(input.trim());
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
      </TouchableWithoutFeedback>

      <FlatList
        style={{
          marginTop: 20,
        }}
        data={unarchivedTodos}
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
