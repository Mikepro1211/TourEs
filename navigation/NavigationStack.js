import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
//importacion de las pantallas
import Login from '../screens/Login';
import Register from '../screens/Register';



export default function NavigationStack() {
    
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="login"
        component={Login}
        options={{title: "Iniciar Sesion"}}
      />
      <Stack.Screen
       name='Registro'
       component={Register}
       options={{title: "Registro"}}/>
    </Stack.Navigator>
  )
}
