import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Icon, Searchbar } from "react-native-paper";
import { Card } from "react-native-ui-lib";
import { Chip } from "react-native-paper";
import colors from "../components/colors";
import { getAuth } from "firebase/auth";

import { data } from "../screens/Data";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function Explore({ navigation }) {
  const firstFiveData = data.slice(0, 5);
  const LosmasVistos = data.slice(6, 10);
  const [searchText, setSearchText] = useState("");


  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.location.toLowerCase().includes(searchText.toLowerCase()) ||
      item.categoria.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <SafeAreaView>
          {/**Contenedor para bienvenida de usuario */}
          <View>
            <Searchbar
              style={styles.containerSearchbar}
              placeholder="Search"
              onChangeText={setSearchText}
              value={searchText}
            />

            {searchText &&
              (filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Details", { data: item })
                    }
                  >
                    <View style={styles.contenedorBusquedad}>
                      <Card>
                        <View style={styles.containerinsidecard}>
                          <Card.Section
                            content={[{ text: item.name, text70: true }]}
                            style={{ alignItems: "flex-start" }}
                          />
                        </View>
                      </Card>
                    </View>
                  </TouchableOpacity>
                ))
              ) : (
                <View style={styles.NoTfOUND}>
                  <MaterialCommunityIcons
                    name="emoticon-sad"
                    color={"red"}
                    size={50}
                  >
                    <Text style={{ fontSize: 20 }}>
                      No se encontraron resultados
                    </Text>
                  </MaterialCommunityIcons>
                </View>
              ))}
          </View>

          <View style={{ marginBottom: 30 }}>
            <Text style={styles.tittle}>Lugares turisticos</Text>
            <FlatList
              data={firstFiveData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Details", { data: item })
                    }
                  >
                    <View style={styles.containerCard}>
                      <View style={styles.containerImageCard}>
                        <Card.Image
                          style={styles.imageCard}
                          source={{ uri: item.image }}
                        />
                      </View>
                      <Card.Section
                        content={[
                          { text: item.name, text70: true },
                          {
                            text: item.location,
                            text90: true,
                            style: { marginTop: 10 },
                          },
                        ]}
                        style={{
                          alignItems: "flex-start",
                          marginTop: 10,
                          alignSelf: "center",
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                );
              }}
              horizontal
            />
          </View>
          <View>
            <Text style={styles.tittle}>Los mas vistos</Text>
            <View>
              {LosmasVistos.map((item) => (
                <TouchableOpacity onPress={() =>
                  navigation.navigate("Details", { data: item })}
                  >
                  <View style={styles.containerCardVistos}>
                    <View style={styles.containerImageCard}>
                      <Card.Image
                        style={styles.imageCardVertical}
                        source={{ uri: item.image }}
                      />
                      </View>
                      <View style={styles.sectionInformation}>
                      <Card.Section 
                        content={[
                          { text: item.name, text70: true },
                          {
                            text: item.location,
                            text90: true,
                           
                            style: { marginTop: 10 },
                          },
                          {
                            text: item.categoria,
                            text90: true,
                            style: { marginTop: 10 },
                          }
                        ]}
                        style={styles.secondInformationCard}
                      />
                     
                      </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  
  sectionInformation:{
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },


  containerCardVistos:{
    width: "100%",
    borderRadius: 10,
    backgroundColor: colors.blanquito2,
    height: 200,
    textAlign: "center",
    marginHorizontal: 10,
    marginBottom: 50,
  },
  NoTfOUND: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 50,
    color: "white",
  },
  contenedorBusquedad: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: 50,
    padding: 10,
    margin: 10,
  },
  userImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  userDetails: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    padding: 10,
  },
  containerBienvenido: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainContainer: {
    padding: 16,
    backgroundColor: colors.blanquito,
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },

  categorias: {
    width: 100,
    height: 50,
  },

  //Estilo  aprobado
  containerSearchbar: {
    backgroundColor: colors.primary50,
    width: "100%",
    height: 50,
    borderRadius: 30,
    marginTop: 20,
    marginRight: 30,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    fontSize: 18,
  },

  tittle: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  containerCard: {
    width: 250,
    borderRadius: 10,
    backgroundColor: colors.blanquito2,
    height: 200,
    textAlign: "center",
    marginHorizontal: 10,
  },

  containerImageCard: {
    width: "100%",
    height: "50%",
  },
  imageCard: {
    width: "100%",
    height: "100%",
  },
  containerCardVertical: {
    width: "100%",
    backgroundColor: "red",
  },
  containerImageCardVertical: {
    width: "100%",
    height: "50%",
  },
  imageCardVertical: {
    width: "100%",
    height: "100%",
  },

  containerinsidecard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

/**
 * Card >
                    <Card.Image
                      source={{ uri: item.image }}
                    />
                    <Card.Section
                      content={[
                        { text: item.name, text70: true },
                        { text: item.location, text90: true,  style: { marginTop: 10 }},
                      ]}
                      style={{ alignItems: "flex-start" }}
                    />
                  </Card>
 */
