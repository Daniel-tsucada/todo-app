import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Layout = () => {
  return (
    /**
     * ここで、画面遷移を行うためのコンポーネントであるTabsを使用します。
     * Tabsは、画面遷移を行うためのコンポーネントで.Screenコンポーネントを子要素に持ちます。
     * また、Screenコンポーネントには、nameとcomponentの2つのプロパティを渡す必要があります。
     * nameは、画面遷移を行うための名前で、componentは、画面遷移先のコンポーネントです。
     * ここでは、nameにindexとarchiveを渡しています。
     * また、componentには、それぞれ、ToDoListコンポーネントとArchiveListコンポーネントを渡しています。
     * これで、画面遷移を行うためのコンポーネントを作成することができました。
     * screenOptionsプロパティには、画面遷移を行うためのオプションを設定することができます。
     */

    /**
      optionsプロパティには、画面遷移を行うためのオプションを設定することができます。
      ここでは、headerShownプロパティにfalseを設定しています。
      これで、ヘッダーを非表示にすることができました。
      titleは、ヘッダーのタイトルを設定するためのプロパティです。
      tabBarLabelは、タブのラベルを設定するためのプロパティです。
      headerStyleは、ヘッダーのスタイルを設定するためのプロパティです。
      tableIconは、タブのアイコンを設定するためのプロパティです。
       */

    <Tabs screenOptions={{ headerShown: false }}>
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
