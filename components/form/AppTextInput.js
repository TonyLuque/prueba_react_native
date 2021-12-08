import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import EyeCloseIcon from "../../assets/icons/EyeCloseIcon";
import EyeIcon from "../../assets/icons/EyeIcon";

function AppTextInput({
  icon,
  width = "100%",
  textArea,
  seeEye,
  iconOnpress,
  pressValue,
  secureTextEntryValue,
  customMargin,
  styleContainerInput,
  ...otherProps
}) {
  return (
    <View
      style={[
        styles.container,
        { width },
        customMargin,
        textArea && styles.textAreaHeight,
        styleContainerInput,
      ]}
    >
      <TextInput
        placeholderTextColor={"gray"}
        style={[
          styles.inputNoIcon,
          textArea && styles.textAreaInput,
          { lineHeight: null },
        ]}
        multiline={textArea && true}
        secureTextEntry={secureTextEntryValue}
        {...otherProps}
      />
      {seeEye ? (
        <TouchableOpacity
          onPress={iconOnpress}
          style={styles.iconPasswordContainer}
        >
          {pressValue === false ? (
            <View style={{ marginLeft: 13 }}>
              <EyeIcon />
            </View>
          ) : (
            <View style={{ marginLeft: 10 }}>
              <EyeCloseIcon />
            </View>
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    marginBottom: 24,
    marginTop: 16,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
  },
  input: {
    width: "80%",
  },
  inputNoIcon: {
    width: "80%",
    marginLeft: 16,
  },
  textAreaHeight: {
    paddingTop: 16,
    height: 150,
  },
  textAreaInput: {
    alignSelf: "flex-start",
  },
});

export default AppTextInput;
