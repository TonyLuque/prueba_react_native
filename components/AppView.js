import React from "react";
import { StyleSheet, View } from "react-native";

const AppView = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default AppView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
