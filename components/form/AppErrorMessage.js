import React from "react";
import { StyleSheet, Text } from "react-native";

function AppErrorMessage({ error, visible, customStyle }) {
  if (!visible || !error) return null;

  return <Text style={[styles.text, customStyle]}>{error}</Text>;
}

const styles = StyleSheet.create({
  text: {
    marginTop: -20,
    marginBottom: 24,
    fontSize: 16,
    color: "red",
  },
});

export default AppErrorMessage;
