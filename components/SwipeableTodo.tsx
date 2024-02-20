import React, { memo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import CheckBox from "expo-checkbox";
import { Swipeable } from "react-native-gesture-handler";
import { RectButton } from "react-native-gesture-handler";
import { TodoItem } from "../store/store";

const LeftActions = memo(
  ({
    archived,
    handleDelete,
    handleArchive,
    item,
  }: {
    archived: boolean;
    handleDelete?: (item: TodoItem) => void;
    handleArchive?: (item: TodoItem) => void;
    item: TodoItem;
  }) => {
    return (
      <TouchableOpacity
        style={{ paddingLeft: 10 }}
        onPress={() => {
          if (archived) {
            handleDelete && handleDelete(item);
          } else {
            handleArchive && handleArchive(item);
          }
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            width: 90,
            height: 41,
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            {archived ? "Delete" : "Archive"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);

const SwipeableTodo = ({
  item,
  archived,
  toggleTodo,
  handleArchive,
  handleDelete,
}: {
  item: TodoItem;
  archived: boolean;
  toggleTodo: (id: number) => void;
  handleArchive?: (item: TodoItem) => void;
  handleDelete?: (item: TodoItem) => void;
}) => {
  return (
    <Swipeable
      renderLeftActions={() => (
        <LeftActions
          archived={archived}
          handleDelete={handleDelete}
          handleArchive={handleArchive}
          item={item}
        />
      )}
    >
      <View
        style={{
          backgroundColor: "#A4C6FF",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 5,
          marginBottom: 10,
          width: "95%",
          alignSelf: "center",
        }}
      >
        <Text
          style={[styles.todoText, item.completed && styles.todoTextCompleted]}
        >
          {item.id + 1}. {item.title}
        </Text>
        <TouchableOpacity>
          <CheckBox
            value={item.completed}
            onValueChange={() => !archived && toggleTodo(item.id)}
          />
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  todoText: {
    fontSize: 18,
    color: "#333333",
  },
  todoTextCompleted: {
    textDecorationLine: "line-through",
    color: "#BEBEBE",
  },
});

export default SwipeableTodo;
