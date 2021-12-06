import React from "react";
import { Button, Text, View } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button
        title="Siguiente"
        onPress={() => navigation.navigate("loginScreen")}
      />
    </View>
  );
};

export default WelcomeScreen;
