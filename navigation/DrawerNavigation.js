
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";
//Importacion de las pantallas  
import Home from "../screens/Home";
import EditProfile from "../screens/EditProfile";
import DrawerView from "./DrawerView";
import colors from "../components/colors";
import TabNavigation from "./TabNavigation";
//importacion del drawerItem

const Drawer = createDrawerNavigator();

export default function DrawerNavigation({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName={TabNavigation}
      drawerContent={props => <DrawerView {...props} />}
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor:colors.primary,
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
        drawerActiveTintColor: colors.primary700,
        //color  for other screen that are not activated
        drawerInactiveTintColor: "#fff",
        drawerLabelStyle: {
          marginLeft: 10,
          fontSize: 15,
          fontWeight: "bold",
          color: colors.negro,
        },
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={Home}/>
      <Drawer.Screen
        name = "Edit Profile" 
        component={EditProfile}/>

          </Drawer.Navigator>
  );
}
