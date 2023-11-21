import { StatusBar } from 'expo-status-bar';
import React ,{useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text } from 'react-native';
import Onboarding from './components/Onboarding'
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './navigation/NavigationStack';
import TabNavigation from './navigation/TabNavigation';
import { ActivityIndicator ,View } from 'react-native';
export default function App() {
    return (
      <NavigationContainer>
        <NavigationStack/>
      </NavigationContainer>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
