import * as React from "react";
import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,

} from "react-native";
import colors from "../components/colors";
//import { TextInput } from 'react-native-paper'
//importaciones de notificaciones


//firebase
import firebaseConfig from "../FirebaseConfig/FirebaseConfig";
initializeApp(firebaseConfig);
const auth = getAuth();
import { getAuth, createUserWithEmailAndPassword, validatePassword } from "firebase/auth";
import { initializeApp } from "@firebase/app";

export default function Register({ navigation }) {
  const handleRegister = () => {
     // Expresión regular para validar el email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Expresión regular para validar la contraseña
    // Esta es solo un ejemplo, deberías ajustarla a tus necesidades
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email');
      return;
    }

    if (!passwordRegex.test(password)) {
      alert('Password must contain at least 8 characters, one letter and one number');
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        navigation.navigate("Home"); // Añade esta línea
        //borrar los campos del formulario
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
  const [userName, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isPassOk,setIsPassOk]=useState(true);
  const [Confirmpassword, setConfirmPassword] = React.useState("");
   
  validarPassword=(password)=>{
    var re=/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
    return re.test(password);
   };
    validarEmail=(email)=>{
      var re=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return re.test(email);
    };
  return (
    <SafeAreaView style={styles.safeare}>
      <View style={styles.header}>
        <View style={styles.headercontainer}>
          <Text>Create new Account</Text>
          
        </View>

        {/** Contenedor de Formulario */}
        <View style={styles.formaContainer}>
          <Text style={styles.formText}>Email</Text>
          {/** Input de Email */}
          <View style={styles.ContainerInput}>
           
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            {/**Inpute Password */}
            <Text style={styles.formText}>Password</Text>

            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            
          </View>
        </View>
      </View>

      <TouchableOpacity  style={styles.botonazo} onPress={handleRegister}>
        <Text style={styles.textBoton}>Register</Text>
        </TouchableOpacity>
      <View style={styles.footer}></View>
    </SafeAreaView>
  );
  //Firebase
}

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flex: 0.1,
    justifyContent: "center",

    alignItems: "center",
  },
  forgotPassawordContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
  formText: {
    fontSize: 12,
    marginLeft: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  formaContainer: {
    display: "flex",
    position: "realative",
    top: 40,
    paddingBottom: 100,
  },
  input: {
    height: 50,
    borderRadius: 100,
   
    borderWidth: 1,
    padding: 15,
    marginBottom: 30,
  },
  safeare: {
    display: "flex",
    flex: 1,
    marginTop: 25,
    margin: 16,
    backgroundColor: colors.white,
    flexDirection: "column",
  },
  header: {
    backgroundColor: colors.white,
    padding: 10,
    marginTop: 10,
  },
  headercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  containerForm: {
    backgroundColor: "red",
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 30,
  },
  botonazo:{
    backgroundColor: colors.primary700,
    padding:10,
    borderRadius:100,
    width:'100%',
    height:50,
   
},
textBoton:{
  color: 'white',
  textAlign:'center',
  fontSize:18,
},
});
