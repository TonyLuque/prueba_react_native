import React from "react";
import { Button, Text } from "react-native";
import AppView from "../../components/AppView";

const RegistrationScreen = ({ navigation }) => {
  return (
    <AppView>
      <Text>RegistrationScreen</Text>
      <Button
        title="Registrarse"
        onPress={() => navigation.navigate("okRegistrationScreen")}
      />
    </AppView>
  );
};

export default RegistrationScreen;
