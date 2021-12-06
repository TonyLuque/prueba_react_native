import React from "react";
import { View, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IconHome from "../assets/icons/IconHome";
import IconPhone from "../assets/icons/IconPhone";
import IconCamera from "../assets/icons/IconCamera";
import IconSetting from "../assets/icons/IconSetting";

const Tab = createBottomTabNavigator();

const defaultScreen = () => {
  return (
    <View>
      <Text>Naita</Text>
    </View>
  );
};

export default TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={defaultScreen}
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
        name="call"
        component={defaultScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <IconPhone focus={focused} />
            ) : (
              <Text style={{ marginBottom: 0 }} primary>
                Llamar
              </Text>
            ),
          tabBarLabel: () => false,
        }}
      />
      <Tab.Screen
        name="report"
        component={defaultScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <IconCamera focus={focused} />
            ) : (
              <Text style={{ marginBottom: 0 }} primary>
                Denunciar
              </Text>
            ),
          tabBarLabel: () => false,
        }}
      />
      <Tab.Screen
        name="settings"
        component={defaultScreen}
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
