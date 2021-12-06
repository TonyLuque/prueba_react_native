import React from "react";
import { Button, Text, View } from "react-native";

const OkRegistrationScreen = ({ navigation }) => {
  return (
    <View>
      <Text>OkRegistrationScreen</Text>
      <Button
        title="Volver al login"
        onPress={() => navigation.navigate("loginScreen")}
      />
    </View>
  );
};

export default OkRegistrationScreen;
