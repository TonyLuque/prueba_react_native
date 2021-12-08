import React from "react";
import { StyleSheet, Text } from "react-native";
import AppView from "../../components/AppView";
import PrimaryButton from "../../components/PrimaryButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <AppView>
      <Text style={styles.text}>Bienvenido a esta app</Text>
      <PrimaryButton
        title="Siguiente"
        onPress={() => navigation.navigate("loginScreen")}
      />
    </AppView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  text: { fontSize: 20, textAlign: "center", marginBottom: 32 },
});
