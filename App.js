import { StatusBar } from 'expo-status-bar';
import React ,{useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './components/Onboarding'
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './navigation/NavigationStack';
import TabNavigation from './navigation/TabNavigation';
export default function App() {
  const [isFirstLaunch, setIsFirstLaunch]= React.useState(null);
  

  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then(value=>{
      if(value==null){
        AsyncStorage.setItem('alreadyLaunched','true');
        setIsFirstLaunch(true);
      }else{
        setIsFirstLaunch(false);
      }
    });
  },[]);

  if(isFirstLaunch==null){
    return null;}else if(isFirstLaunch==true){
      return(
        <Onboarding/>
      );
    }else{
      return(
        <NavigationContainer>
          <NavigationStack/>
        
        </NavigationContainer>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
