import React from 'react';
import { View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import colors from './components/colors';
import { color } from 'react-native-elements/dist/helpers';


const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.jpg')} style={{ width: "100%", height: 200 }} />
     
      <TouchableOpacity style={styles.botonazo} onPress={() => navigation.navigate('login')}>
        <Text style={styles.textBoton}>Login</Text>
        </TouchableOpacity>

    <TouchableOpacity style={styles.botonazo} onPress={() => navigation.navigate('Registro')}>
    <Text style={styles.textBoton}>Registro</Text>
    </TouchableOpacity>
      </View>


   
  );
};

const styles = StyleSheet.create({
    botonazo:{
        backgroundColor: colors.primary700,
        padding:10,
        borderRadius:100,
        marginVertical: 20,
        paddingVertical: 10,
        width:'100%',
        height:50,
    },
    textBoton:{
      color: 'white',
      textAlign:'center',
      fontSize:18,
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
    color: colors.white,
    marginBottom: 20,
  },
  button: {
    borderRadius: 30,
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: colors.primary700,
  },
  buttonTitle: {
    color: colors.white,
  },
});

export default StartScreen;