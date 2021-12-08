import React, { useState } from "react";
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
} from "react-native";
import CRUD from "../../api_fake/CRUD";
import AppView from "../../components/AppView";
import AppForm from "../../components/form/AppForm";
import AppFormField from "../../components/form/AppFormField";
import SubmitButton from "../../components/form/SubmitButton";
import { ValidationRegisterForm } from "../../components/form/validations/ValidationRegisterForm";

const RegistrationScreen = ({ navigation }) => {
  const [seePassword, setSeePassword] = useState(true);
  const [press, setPress] = useState(false);

  const seePasswordFunction = () => {
    if (press === false) {
      setSeePassword(false);
      setPress(true);
    } else {
      setSeePassword(true);
      setPress(false);
    }
  };

  const sendData = (values) => {
    CRUD.RegisterUser(values.email, values).then((e) =>
      !e
        ? Alert.alert("El usuario ya existe.")
        : navigation.navigate("okRegistrationScreen")
    );
  };
  return (
    <AppView>
      <Text style={styles.text}>Bienvenido</Text>
      <ScrollView>
        <KeyboardAvoidingView>
          <AppForm
            initialValues={{
              firstName: "",
              phone: "",
              email: "",
              confirmEmail: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={sendData}
            validationSchema={ValidationRegisterForm}
          >
            <AppFormField
              label="Nombre"
              name="firstName"
              placeholder="Cosme Fulanito"
            />
            <AppFormField
              label="Teléfono"
              name="phone"
              placeholder="3213456798"
              keyboardType="numeric"
            />
            <AppFormField
              label="Correo electronico"
              name="email"
              autoCapitalize="none"
              placeholder="Correo electrónico"
              keyboardType="email-address"
              textContentType="emailAddress"
              placeholder="email@ejemplo.com"
            />
            <AppFormField
              label="Confirma el correo electronico"
              name="confirmEmail"
              autoCapitalize="none"
              placeholder="Correo electrónico"
              keyboardType="email-address"
              textContentType="emailAddress"
              placeholder="email@ejemplo.com"
            />
            <AppFormField
              label="Contraseña"
              autoCapitalize="none"
              name="password"
              textContentType="password"
              seeEye
              iconOnpress={seePasswordFunction}
              pressValue={press}
              secureTextEntryValue={seePassword}
            />

            <AppFormField
              autoCapitalize="none"
              label="Confirma la contraseña"
              name="confirmPassword"
              textContentType="password"
              seeEye
              iconOnpress={seePasswordFunction}
              pressValue={press}
              secureTextEntryValue={seePassword}
            />
            <SubmitButton title="Registrarse" />
          </AppForm>
        </KeyboardAvoidingView>
      </ScrollView>
    </AppView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  text: { fontSize: 20, textAlign: "center", marginBottom: 32 },
});
