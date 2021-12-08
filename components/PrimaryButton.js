import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const PrimaryButton = ({ title, onPress, styleContainer, styleTitle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styleContainer]}
    >
      <Text style={[styles.text, styleTitle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderRadius: 50,
    backgroundColor: "blue",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
