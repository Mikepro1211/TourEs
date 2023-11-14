import * as React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";
import colors from "../components/colors";
//import { TextInput } from 'react-native-paper'
import Button from "../components/Button";

export default function Register({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
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
              onChange={setPassword}
              secureTextEntry={true}
            />
            <Text style={styles.formText}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChange={setPassword}
              secureTextEntry={true}
            />
          
          </View>
        </View>
      </View>

      <Button title="Register" />
      <View style={styles.footer}>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flex:0.10,
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
