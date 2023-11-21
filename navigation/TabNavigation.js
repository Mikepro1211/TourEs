import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createMaterialBottomTabNavigator();

//screens  inside tab navigation

import Explore from "../screens/Explore";
import Booking from "../screens/Booking";
import Favorite from "../screens/Favorite";
import MyTrips from "../screens/MyTrips";
import colors from "../components/colors";

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      activeColor={colors.primary}
      inactiveColor={colors.primary700}
      barStyle={{ backgroundColor: "#ffff" }}
    >
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="compass" color={color} size={26} />
          ),
        }}
      />
     
      
      {/*
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cannabis" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Mytrips"
        component={MyTrips}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="briefcase" color={color} size={26} />
          ),
        }}
      />
      */}
    </Tab.Navigator>
  );
}
