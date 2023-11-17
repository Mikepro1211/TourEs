import * as React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from "react-native";
import colors from "../components/colors";
//import { TextInput } from 'react-native-paper'

//firebase
import firebaseConfig from "../FirebaseConfig/FirebaseConfig";
initializeApp(firebaseConfig);
const auth = getAuth();
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "@firebase/app";

export default function Register({ navigation }) {
  const handleRegister = () => {
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
        // ..
      });
  };
  const [userName, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [Confirmpassword, setConfirmPassword] = React.useState("");
  return (
    <SafeAreaView style={styles.safeare}>
      <View style={styles.header}>
        <View style={styles.headercontainer}>
          <Text>Create new Account</Text>
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
              placeholder="Username"
              value={userName}
              onChangeText={setUsername}
              keyboardType="default"
            />
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
            <Text style={styles.formText}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={Confirmpassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
            />
          </View>
        </View>
      </View>

      <Button title="Register" onPress={handleRegister} />
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
    borderColor: "#00000",
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
});
