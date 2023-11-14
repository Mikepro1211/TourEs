/*import * as React from " react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
//importacion del drawerItem

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName={Home}
      drawerContent={(props) => <Drawerview {...props} />}
      screenOptions={{
        headerTintColor: "black",
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        headerTitle: ({ focused, color, size }) => (
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 250,
            }}
          >
            
          </View>
        ),
        //color to show when the item is active
        drawerActiveTintColor: "#7FBC03",
        //color  for other screen that are not activated
        drawerInactiveTintColor: "#fff",
        drawerLabelStyle: {
          marginLeft: 10,
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={Home}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            
          ),
        }}
      />

          </Drawer.Navigator>
  );
}
*/