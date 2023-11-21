import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
//importacion de las pantallas
import Login from "../screens/Login";
import Register from "../screens/Register";
import DrawerNavigation from "./DrawerNavigation";
import Details from "../screens/Details";
import ReservationForm from "../screens/Reservar";
import StartScreen from "../StarScreen";

export default function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registro"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ title: "" }}
      />
      <Stack.Screen name="Reservar" component={ReservationForm} />
    </Stack.Navigator>
  );
}
