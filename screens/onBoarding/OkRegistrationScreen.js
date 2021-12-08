import React from "react";
import { Button, Text } from "react-native";
import AppView from "../../components/AppView";

const OkRegistrationScreen = ({ navigation }) => {
  return (
    <AppView>
      <Text>OkRegistrationScreen</Text>
      <Button
        title="Volver al login"
        onPress={() => navigation.navigate("loginScreen")}
      />
    </AppView>
  );
};

export default OkRegistrationScreen;
