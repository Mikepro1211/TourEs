import * as React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert
} from "react-native";
import colors from "../components/colors";
//import Alerts  





//Firebase Config 
import  firebaseConfig from "../FirebaseConfig/FirebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "@firebase/app";

initializeApp(firebaseConfig);
const auth = getAuth();


export default function Login({ navigation }) {

   const handleLogin = () => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigation.navigate('Home'); // Añade esta línea
    //borrar campos 
    setEmail("");
    setPassword("");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    if (errorCode === "auth/user-not-found" && errorCode === "auth/wrong-password"){
      alert("Usuario no encontrado Porfavor Registrese");
    }
    if(errorCode === "auth/invalid-login-credentials"){
      alert("Contraseña incorrecta");
    } else if (errorCode === "auth/invalid-email") {
      alert("Email incorrecto");
    }else if(errorCode === "auth/missing-password"){
      alert("Coloque su contraseña");
    }else if(errorCode === "auth/email-not-found"){
      alert("Usuario no encontrado Porfavor Registrese");
  }else if(errorCode === "auth/user-not-found"){

  alert("Usuario no encontrado Porfavor Registrese"); 

  }else {
      alert(errorMessage);
    }
  })
    
};
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (<>
    <SafeAreaView style={styles.safeare}>
    
      <View style={styles.header}>
      
        <View style={styles.headercontainer}>
          <Text>Sign in to your account</Text>
          
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
            <View style={styles.forgotPassawordContainer}>
              
            </View>
          </View>
        </View>
      </View>

     <TouchableOpacity style={styles.botonazo} onPress={handleLogin} >
      <Text style={styles.textBoton}>Sign in</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
    <TouchableOpacity onPress={()=>navigation.navigate("Registro")}
     
    >

      <Text>Don't have an account? Sign up</Text>

      {/*
      <Button title="Reset first launch" onPress={() => AsyncStorage.removeItem('alreadyLaunched')} />
      */}
    </TouchableOpacity>
    </View>  
  
    </SafeAreaView>
    
  
  </>
  );
}

const styles = StyleSheet.create({
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
  footer: {
    display: "flex",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"button",
    marginTop: 200,
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
    marginBottom: 50,
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
});
