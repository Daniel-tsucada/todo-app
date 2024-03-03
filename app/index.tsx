import { Redirect } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn && <Redirect href={"./(tabs)"} />}
      <View style={styles.container}></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    //flexは、親要素の大きさに対して子要素の大きさをどのように分配するかを指定するプロパティで1を設定すると親要素の大きさに合わせて子要素の大きさを分配する今回の場合は画面全体に表示される
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
