import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import CRUD from "../../api_fake/CRUD";
import AppView from "../../components/AppView";
import AppForm from "../../components/form/AppForm";
import AppFormField from "../../components/form/AppFormField";
import SubmitButton from "../../components/form/SubmitButton";
import { ValidationProfileForm } from "../../components/form/validations/ValidationProfileForm";
import Context from "../../utils/Context";

const Profile = ({ navigation }) => {
  const { token } = useContext(Context);
  const [user, setUser] = useState();

  useEffect(() => {
    CRUD.GetProfile(token).then((e) => setUser(e));
  }, [user]);

  const sendData = (values) => {
    CRUD.UpdateProfile(token, values).then((e) => {
      setUser(e);
      navigation.navigate("home");
    });
  };

  return (
    <AppView>
      <Text style={styles.text}>Puedes actualizar tus datos</Text>

      <AppForm
        initialValues={{
          firstName: "",
          phone: "",
        }}
        onSubmit={sendData}
        validationSchema={ValidationProfileForm}
      >
        <AppFormField
          label=""
          name="firstName"
          placeholder=""
          valueToShow={user?.firstName}
        />
        <AppFormField
          label=""
          name="phone"
          placeholder=""
          valueToShow={user?.phone}
        />

        <SubmitButton title="Actualizar" />
      </AppForm>
    </AppView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  text: { fontSize: 20, textAlign: "center", marginBottom: 32 },
});
