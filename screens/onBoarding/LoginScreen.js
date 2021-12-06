import React from "react";
import { Button, Text, View } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Login" onPress={() => console.log("Logueado")} />
      <Button
        title="Registrase"
        onPress={() => navigation.navigate("registrationScreen")}
      />
    </View>
  );
};

export default LoginScreen;
