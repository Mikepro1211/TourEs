import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Carousel } from "react-native-ui-lib";
import { Card } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../components/colors";

import MapView from "react-native-maps";
import { Marker } from "react-native-maps";


export default function Details({ navigation, route }) {
  const { data } = route.params;
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Carousel showCounter={true} autoplay={true} loop={true}>
          {data.imagenes.map((imagen, index) => (
            <Image
              key={index}
              style={{ width: 400, height: 250 }}
              source={{ uri: imagen }}
            />
          ))}
        </Carousel>
        <Text style={styles.title}>{data.name}</Text>

        <Text style={styles.location}>{data.location}</Text>

        <Text style={styles.description}>{data.description}</Text>

        <View style={styles.container2}>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.title2}>Precio</Text>
              <Text style={styles.price2}> $ {data.precio} por Persona</Text>
              <Text></Text>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.title2}>Horario</Text>
              <Text style={styles.details2}>
               {data.horario}
              </Text>
            </Card.Content>
          </Card>
        </View>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: data.latitud,
            longitude: data.longitud,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: data.latitud,
              longitude: data.longitud,
            }}
            title={data.name}
            description={data.location}
          />
        </MapView>

        <View style={styles.containerDos}>
          
          <TouchableOpacity style={styles.botonazo} onPress={() => navigation.navigate("Reservar", { data: data })}>
            <Text style={styles.textBoton} >Reservar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  card: {
    margin: 16,
    padding: 15,
    backgroundColor: "#F2F2F2",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
  },
  location: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  description: {
    fontSize: 16,
    margin: 10,
  },
  contactoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    padding: 8,
  },
  contactoText: {
    fontSize: 16,
    marginLeft: 8,
  },
  redesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 24,
  },
  descripcion: {
    textAlign: "justify",
    alignItems: "center",
  },

  containerDos: {
    flex: 2,
    backgroundColor: " red",
    margin: 16,
    padding: 16,
  },
  nombreCentro: {
    color: colors.negro,
    fontSize: 25,
    margin: 25,
    alignContent: "flex-start",
    fontFamily: "Roboto",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
  },
  Text: {
    fontSize: 100,
  },
  imagen: {
    width: "100%",
    height: 200,
  },
  map: {
    width: "100%",
    height: 300,
    marginTop: 10,
  },

  container2: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  card2: {
    marginBottom: 10,
  },
  title2: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price2: {
    fontSize: 16,
    color: "#000",
  },
  details2: {
    fontSize: 14,
    color: "#000",
  },
});
