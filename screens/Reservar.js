import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Linking } from "react-native";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { DatePickerModal } from "react-native-paper-dates";
import ConfirmationCard from "./ConfirmationCard";
import UserCard from "../screens/UserCard";
import { useRoute } from "@react-navigation/native";
import colors from "../components/colors";
//DATABASE
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
const db = getFirestore();
const saveReservation = async () => {
  if (user && date && data && guests && total) {
    try {
      await firebase.firestore().collection('reservas').add({
        user: user.email,
        date: date.toLocaleDateString(),
        place: data.name,
        guests: guests,
        total: total
      });
      console.log('Reserva guardada');
    } catch (error) {
      console.error('Error al guardar la reserva: ', error);
    }
  }
};
const auth = getAuth();
const user = auth.currentUser;
console.log("Estoy en Reserva");
console.log("Usuario macaCO: ");

let displayName = "";
let email = "";
let photoURL = "";

if (user != null) {
  console.log("Usuario MACACO: " + user.email);
  displayName = user.displayName;
  email = user.email;
  photoURL = user.photoURL;
}
//agararr datos del usuario


const ReservationForm = ({ navigation, route }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Limpiar la suscripción al desmontar
    return unsubscribe;
  }, []);

  const { data } = route.params;

  //react-native-paper-dates

  const [date, setDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : "";
  const [datePaper, setDatePaper] = useState(undefined);
  const [open, setOpen] = useState(false);
  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = ({ date }) => {
    setOpen(false);
    setSelectedDate(date);
  };

  //end react native paper dates

  // Asegúrate de que guests y data.precio son números

  const [guests, setGuests] = useState(0);
  const [price, setPrice] = useState("");

  const onDateChange = (selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  

  const onGuestsChange = (value) => {
    const numberValue = parseInt(value, 10);

    if (isNaN(numberValue) || numberValue <= 0) {
    Alert.alert('Error', 'Por favor, ingresa un número de personas válido');
    return;
  }
    setGuests(guests);
  };

  const onPriceChange = (text) => {
    setPrice(text);
  };

  const onReserve = () => {
    // Handle the reservation
  };
  const guestsNumber = parseInt(guests, 10);
  const precioNumber = parseFloat(data.precio);

  // Calcula el total
  const total = guestsNumber * precioNumber;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.labelDetalles}>Datos del destino</Text>
      <View style={styles.datosDelViaje}>
        <Image
          source={{ uri: data.image }}
          style={{ width: 150, height: 110 }}
        />
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Text style={styles.info}>{data.name}</Text>
          <Text style={styles.info}>{data.location}</Text>
          <Text style={styles.info}>{data.categoria}</Text>
          <Text style={styles.info}>${data.precio}.00 por persona</Text>
        </View>
      </View>

      {/* Formulario Space*/}
      <View style={styles.containerForm}>
        <TouchableOpacity
          style={styles.selecccionFecha}
          onPress={() => setOpen(true)}
        >
          <Text style={styles.seleccionText}>Seleccionar fecha</Text>
        </TouchableOpacity>
        <Text>
          {selectedDate
            ? selectedDate.toLocaleDateString()
            : "No date selected"}
        </Text>

        <Text style={styles.label}>Número de personas:</Text>
        <TextInput
          style={styles.input}
          value={guests.toString()}
          onChangeText={setGuests}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text style={styles.labelDetalles}>Datos del Usuario</Text>
        {user ? (
          <UserCard email={user.email} />
        ) : (
          <UserCard email={"No hay usuario"} />
        )}
      </View>

      <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
        <DatePickerModal
          locale="en"
          mode="single"
          visible={open}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
        />
        {date && <Text> Selected date :{date.toLocaleDateString()}</Text>}
      </View>
      <ConfirmationCard
        place={data.name}
        date={formattedDate}
        guests={guests}
        totalAmount={total}
      />

      <View style={styles.buttonContainer}>
        <Button title="Reservar" onPress={()=>sendToWhatsApp(user,data,date,guests,total)} color="#A463F2" />
      </View>
    </ScrollView>
  );
  function sendToWhatsApp(user, data, date, guests, total) {
   
    if (guests <= 0) {
      Alert.alert('Error', 'Por favor, ingresa un número de personas válido');
      return;
    }
    const message = `Usuario: ${user.email}\nDestino: ${data.name}\nFecha: ${formattedDate ? formattedDate : 'No especificada'}\nPersonas: ${guests}\nTotal a pagar: ${total}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '75642631'; // reemplaza esto con el número de teléfono al que quieres enviar el mensaje
    const whatsappUrl = `whatsapp://send?text=${encodedMessage}&phone=${phoneNumber}`;
  
    Linking.openURL(whatsappUrl);
  }
};

const styles = StyleSheet.create({
  seleccionText: {
    color: colors.blanquito,
    textAlign: "center",
    padding: 10,
    marginVertical: 5,
  },

  selecccionFecha: {
    backgroundColor: colors.primary700,
    borderRadius: 10,
    width: "50%",
    shadowOffset: { width: 0, height: 0 },
    marginHorizontal: "25%",
    marginBottom: 20,
  },
  containerForm: {
    marginTop: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.primary50,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },

  info: {
    color: colors.primary700,
    textAlign: "center",
    paddingLeft: 20,
  },
  datosDelViaje: {
    display: "flex",
    backgroundColor: colors.primary50,
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    justifyContent: "flex-start",
    shadowOffset: { width: 0, height: 0 },
  },
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  label: {
    fontSize: 16,
    marginTop: 20,
    color: "#333",
  },

  labelDetalles: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#A463F2",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 30,
  },
});

export default ReservationForm;
