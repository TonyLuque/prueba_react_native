import React from "react";
import { Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IconHome from "../assets/icons/IconHome";
import IconSetting from "../assets/icons/IconSetting";

import HomeScreen from "../screens/home/HomeScreen";
import Profile from "../screens/settings/Profile";

const Tab = createBottomTabNavigator();

export default TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <IconHome focus={focused} />
            ) : (
              <Text style={{ marginBottom: 0 }} primary>
                Inicio
              </Text>
            ),
          tabBarLabel: () => false,
        }}
      />

      <Tab.Screen
        name="settings"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <IconSetting focus={focused} />
            ) : (
              <Text style={{ marginBottom: 0 }} primary>
                Configuración
              </Text>
            ),
          tabBarLabel: () => false,
        }}
      />
    </Tab.Navigator>
  );
};
