import React from "react";
import { Button, Text } from "react-native";
import AppView from "../../components/AppView";

const WelcomeScreen = ({ navigation }) => {
  return (
    <AppView>
      <Text>WelcomeScreen</Text>
      <Button
        title="Siguiente"
        onPress={() => navigation.navigate("loginScreen")}
      />
    </AppView>
  );
};

export default WelcomeScreen;
