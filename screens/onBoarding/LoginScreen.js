import React, { useContext, useState } from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import AppForm from "../../components/form/AppForm";
import AppFormField from "../../components/form/AppFormField";
import { ValidationLogin } from "../../components/form/validations/ValidationLogin";
import SubmitButton from "../../components/form/SubmitButton";
import AppView from "../../components/AppView";
import CRUD from "../../api_fake/CRUD";
import Context from "../../utils/Context";

const LoginScreen = ({ navigation }) => {
  const [seePassword, setSeePassword] = useState(true);
  const [press, setPress] = useState(false);
  const { setToken } = useContext(Context);

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
    CRUD.LoginUser(values.email, values.password).then((e) => {
      e ? setToken(e) : Alert.alert("El correo o la contraseña no coinciden.");
    });
  };

  return (
    <AppView>
      <Text>LoginScreen</Text>
      <AppForm
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={sendData}
        validationSchema={ValidationLogin}
      >
        <AppFormField
          autoCapitalize="none"
          label="Correo Electronico"
          name="email"
          placeholder="email@ejemplo.com"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          label="Contraseña"
          name="password"
          textContentType="password"
          seeEye
          iconOnpress={seePasswordFunction}
          pressValue={press}
          secureTextEntryValue={seePassword}
        />
        <SubmitButton title="Iniciar sesión" />
      </AppForm>
      <TouchableOpacity
        onPress={() => navigation.navigate("registrationScreen")}
      >
        <Text>No tienes cuenta. ¡ Crea una ! </Text>
      </TouchableOpacity>
    </AppView>
  );
};

export default LoginScreen;
