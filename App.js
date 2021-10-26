import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./components/Profile";
import CreateUser from "./components/CreateUser";
import Login from "./components/Login";
import LandingPage from "./components/landingPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="landing" component={LandingPage} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="sing up" component={CreateUser} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
