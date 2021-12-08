import React, { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import AppView from "../../components/AppView";
import Context from "../../utils/Context";

const Profile = () => {
  const { setToken } = useContext(Context);
  return (
    <AppView>
      <TouchableOpacity onPress={() => setToken(null)}>
        <Text>Cerrar sesión</Text>
      </TouchableOpacity>
    </AppView>
  );
};

export default Profile;
