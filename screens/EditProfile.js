import React, { useState, useEffect, createRef } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
} from "react-native";

import colors from "../components/colors";
import { ScrollView } from "react-native-gesture-handler";
import { getAuth, updateProfile } from "firebase/auth";
import AlertPro from "react-native-alert-pro";

// Modal
const avatares = [
  {
    id: 1,
    avatar: "https://robohash.org/C48.png?set=set1",
  },
  {
    id: 2,
    avatar: "https://robohash.org/C48.png?set=set2",
  },
  {
    id: 3,
    avatar: "https://robohash.org/C48.png?set=set3",
  },
  {
    id: 4,
    avatar: "https://robohash.org/C48.png?set=set4",
  },
  {
    id: 5,
    avatar: "https://robohash.org/C48.png?set=set5",
  },
  {
    id: 6,
    avatar:
      "https://i.pinimg.com/originals/a1/06/ac/a106ac1653f3670ce0e431e28805a266.jpg",
  },
  {
    id: 7,
    avatar:
      "https://i.pinimg.com/736x/e8/cb/50/e8cb5012f2a28027b71c5f6cd5afee44.jpg",
  },
  {
    id: 8,
    avatar:
      "https://store.playstation.com/store/api/chihiro/00_09_000/container/AR/es/19/UP2136-CUSA02727_00-AV00000000000080/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000",
  },
  {
    id: 9,
    avatar:
      "https://i.pinimg.com/originals/f6/aa/24/f6aa2407d3ca6532e0304d6cd0e9291d.jpg",
  },
];

export default function EditProfile() {
  const  alertRef = createRef();
  // Modal
  const [visibleModal, setVisibleModal] = React.useState(false);

  const auth = getAuth();

  // Function to update user profile
  const handleUpdateProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: avatar,
      phoneNumber: cellphone,
    })
      .then(() => {
        Alert.alert("Profile updated");
        console.log("Profile updated");
        alertRef.current.open();
      })
      .catch((error) => {
        console.log("Error updating profile");
        Alert.alert("Error updating profile");
      });
  };

  const user = auth.currentUser;

  const [userName, setUserName] = useState("");
  const [email, setEmail] = React.useState("");
  const [cellphone, setCellphone] = React.useState("");
  const [avatar, setAvatar] = React.useState("");

  useEffect(() => {
    if (user != null) {
      console.log("Logged in user: " + user.email);
      if (user.displayName != null) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
      setEmail(user.email);

      if (user.phoneNumber != null) {
        setCellphone(user.phoneNumber);
      } else {
        setCellphone("");
      }
    }
  }, [user]);

  return (
    <ScrollView>
      <SafeAreaView style={styles.safeare}>
      

        {/** Modal Container */}

        <Modal
          animationType="slide"
          visible={visibleModal}
          onDismiss={() => setVisibleModal(false)}
          contentContainerStyle={styles.modalContainer}
        >
          {/** Modal Content */}
          <ScrollView>
            <Text style={styles.Seleccion}>Selecciona un avatar</Text>
            <View style={styles.modalContainer}>
              {avatares.map((avatar, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setAvatar(avatar.avatar);
                    setVisibleModal(false);
                  }}
                >
                  <Image
                    source={{ uri: avatar.avatar }}
                    style={{ width: 100, height: 100, margin: 10 }}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          {/** Close Modal */}
          <TouchableOpacity style= { styles.buttonCerrarModal}onPress={() => setVisibleModal(false)}>
            <Text style={styles.textCerrar}>Mikepro</Text>
          </TouchableOpacity>
        </Modal>

        <AlertPro
        ref={alertRef}
        onConfirm={() => alertRef.current.close()}
        title="Actualización exitosa"
        showCancel={false}
        message="Los datos del usuario se han actualizado correctame sadasadasds nxxxxxxe."
        textConfirm="Ok"
        customStyles={{
        mask: {
          backgroundColor: "transparent"
        },
        container: {
          borderWidth: 1,
          borderColor: "#9900cc",
          shadowColor: "#000000",
          shadowOpacity: 0.1,
        // ... el resto de tus estilos personalizados ...
      }}
      }
       />

        {/** Header Container */}
        <View style={styles.header}>
          <Text style={styles.title}>Information</Text>

          {/** Form Container */}
          <View style={styles.formaContainer}>
            <Text style={styles.formText}>UserName</Text>

            <TextInput
              style={styles.input}
              placeholder={userName}
              value={userName}
              onChangeText={setUserName}
            />
            <Text  style={styles.formText}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              keyboardType="email-address"
              editable={false}
            />
            <Text  style={styles.formText}>Cellphone</Text>
            <TextInput
              style={styles.input}
              placeholder={cellphone}
              value={cellphone}
              onChangeText={setCellphone}
              keyboardType="phone-pad"
            />
            
            <TextInput
              style={styles.input}
              placeholder="Avatar"
              value={avatar}
              editable={false}
              onChangeText={setUserName}
            />
            <TouchableOpacity onPress={() => setVisibleModal(true)}>
              <Text>Cambiar Avatar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.botonazo} onPress={handleUpdateProfile}>
          <Text  style={styles.textBoton}>Update Profile</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  //Modal style
  modalContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,

    justifyContent: "center",
    alignItems: "center",
  },

  Seleccion: {
    fontSize: 20,
    margin: 16,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Roboto",
  },

  buttonCerrarModal:{
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  textCerrar:{
   color: colors.white, 
  },


  //Fin de Modal Style
  container: {
    display: "flex",
    direction: "column",
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    color: "#000000",
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
    borderWidth: 0.5,
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
