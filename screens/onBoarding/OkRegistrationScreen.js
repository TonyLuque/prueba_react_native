import React from "react";
import { StyleSheet, Text } from "react-native";
import AppView from "../../components/AppView";
import PrimaryButton from "../../components/PrimaryButton";

const OkRegistrationScreen = ({ navigation }) => {
  return (
    <AppView>
      <Text style={styles.text}>Te registraste con exito</Text>
      <PrimaryButton
        title="Volver al login"
        onPress={() => navigation.navigate("loginScreen")}
      />
    </AppView>
  );
};

export default OkRegistrationScreen;

const styles = StyleSheet.create({
  text: { fontSize: 20, textAlign: "center", marginBottom: 32 },
});
