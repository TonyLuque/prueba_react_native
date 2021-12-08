import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import CRUD from "../../api_fake/CRUD";
import AppView from "../../components/AppView";
import Context from "../../utils/Context";
import Storage from "../../utils/Storage";

const HomeScreen = () => {
  const [user, setUser] = useState();
  const { token, setToken } = useContext(Context);

  useEffect(() => {
    CRUD.GetProfile(token).then((e) => setUser(e));
  }, [user]);

  return (
    <AppView>
      <Text style={styles.text}>
        ¡Hola! <Text style={[styles.text, styles.name]}>{user?.firstName}</Text>
        , es un gusto verte.
      </Text>
      <TouchableOpacity
        onPress={() => {
          Storage.RemoveToken();
          setToken(null);
        }}
        style={styles.button}
      >
        <Text>Cerrar sesión</Text>
      </TouchableOpacity>
    </AppView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: { fontSize: 20, textAlign: "center", marginBottom: 16 },
  name: { color: "blue" },
  button: {
    padding: 16,
    borderRadius: 25,
    borderWidth: 1,
  },
});
