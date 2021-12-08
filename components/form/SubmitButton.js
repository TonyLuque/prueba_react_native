import React from "react";
import { useFormikContext } from "formik";

import { StyleSheet, Text, TouchableOpacity } from "react-native";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <TouchableOpacity onPress={handleSubmit} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

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

export default SubmitButton;
