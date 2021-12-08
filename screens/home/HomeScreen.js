import React, { useContext } from "react";
import { Text } from "react-native";
import AppView from "../../components/AppView";
import Context from "../../utils/Context";

const HomeScreen = () => {
  const { token } = useContext(Context);
  console.log(token);

  return (
    <AppView>
      <Text>Inicio</Text>
    </AppView>
  );
};

export default HomeScreen;
