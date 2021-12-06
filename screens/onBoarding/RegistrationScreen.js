import React from "react";
import { Button, Text, View } from "react-native";

const RegistrationScreen = ({ navigation }) => {
  return (
    <View>
      <Text>RegistrationScreen</Text>
      <Button
        title="Registrarse"
        onPress={() => navigation.navigate("okRegistrationScreen")}
      />
    </View>
  );
};

export default RegistrationScreen;
