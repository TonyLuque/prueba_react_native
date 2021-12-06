import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingNavigation from "./navigation/OnBoardingNavigation";
import TabNavigator from "./navigation/TabNavigator";
import Context from "./utils/Context";
import Storage from "./utils/Storage";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();

export default function App() {
  const [token, setToken] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await Storage.GetToken();
    if (token) {
      setToken(token);
    }
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Context.Provider value={{ token, setToken }}>
      <NavigationContainer>
        {token ? <TabNavigator /> : <OnBoardingNavigation />}
      </NavigationContainer>
    </Context.Provider>
  );
}
