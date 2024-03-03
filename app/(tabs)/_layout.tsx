import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, headerTitleAlign: "center" }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          title: "todo",
          tabBarLabel: "todo",
          headerStyle: { backgroundColor: "#005fff" },
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="format-list-numbered"
              size={24}
              color={focused ? "#3b82f6" : "#374151"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="archive"
        options={{
          headerShown: true,
          title: "archive",
          tabBarLabel: "archive",
          headerStyle: { backgroundColor: "#005fff" },
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="archive-arrow-down"
              size={24}
              color={focused ? "#3b82f6" : "#374151"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
