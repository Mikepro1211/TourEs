import * as React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button
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
  })
};
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (<>
    <SafeAreaView style={styles.safeare}>
      <View style={styles.header}>
        <View style={styles.headercontainer}>
          <Text>Sign in to your account</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text>Skip</Text>
          </TouchableOpacity>
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
              <TouchableOpacity onPress={console.log("nAVE")}>
                <Text>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

     <Button title="Login" onPress={handleLogin} />
      <View style={styles.footer}>
    <TouchableOpacity onPress={()=>navigation.navigate("Registro")}>
      <Text>Don't have an account? Sign up</Text>
    </TouchableOpacity>
    </View>  
    </SafeAreaView>
    
  
  </>
  );
}

const styles = StyleSheet.create({
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
