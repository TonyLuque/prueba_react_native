import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import AppForm from "../../components/form/AppForm";
import AppFormField from "../../components/form/AppFormField";
import { ValidationLogin } from "../../components/form/validations/ValidationLogin";
import SubmitButton from "../../components/form/SubmitButton";

const LoginScreen = ({ navigation }) => {
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
    console.log(values);
  };
  return (
    <View>
      <Text>LoginScreen</Text>
      <AppForm
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={sendData}
        validationSchema={ValidationLogin}
      >
        <AppFormField name="email" placeholder="email@ejemplo.com" />
        <AppFormField
          name="password"
          textContentType="password"
          seeEye
          iconOnpress={seePasswordFunction}
          pressValue={press}
          secureTextEntryValue={seePassword}
        />
        <SubmitButton title="Iniciar sesión" />
      </AppForm>
      <Button
        title="Registrase"
        onPress={() => navigation.navigate("registrationScreen")}
      />
    </View>
  );
};

export default LoginScreen;
