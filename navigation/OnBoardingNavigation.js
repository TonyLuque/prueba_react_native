import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/onBoarding/WelcomeScreen";
import LoginScreen from "../screens/onBoarding/LoginScreen";
import RegistrationScreen from "../screens/onBoarding/RegistrationScreen";
import OkRegistrationScreen from "../screens/onBoarding/OkRegistrationScreen";

const Stack = createNativeStackNavigator();

export default OnBoardingNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="loginScreen" component={LoginScreen} />
      <Stack.Screen name="registrationScreen" component={RegistrationScreen} />
      <Stack.Screen
        name="okRegistrationScreen"
        component={OkRegistrationScreen}
      />
    </Stack.Navigator>
  );
};
