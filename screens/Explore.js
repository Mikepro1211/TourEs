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
import { Searchbar } from "react-native-paper";
import { Card } from "react-native-ui-lib";
import { Chip } from "react-native-paper";
import colors from "../components/colors";
export default function Explore({ navigation }) {
  const data = [
    {
      id: "1",
      name: "Joya de Cerén",
      description:
        "Considerada la 'Pompeya de América', Joya de Cerén es un sitio arqueológico que muestra la vida cotidiana de una aldea maya.",
      location: "Departamento de La Libertad",
      image:
        "https://elsalvador.travel/system/wp-content/uploads/2020/10/joya2.jpg",
    },
    {
      id: "2",
      name: "Ruta de las Flores",
      description:
        "Una pintoresca ruta que atraviesa pueblos encantadores, ofreciendo paisajes, gastronomía local y actividades al aire libre.",
      location: "Varios departamentos: Ahuachapán, Sonsonate, Santa Ana",
      image:
        "https://tuncolife.com/wp-content/uploads/2019/04/tripadvisor-ruta-de-las-flores-flowers-route-english-girl-visiting-el-salvador.jpg",
    },
    {
      id: "3",
      name: "Playa El Tunco",
      description:
        "Famosa por sus olas para surfistas, esta playa también ofrece vibrante vida nocturna y una relajada atmósfera playera.",
      location: "Departamento de La Libertad",
      image:
        "https://i0.wp.com/passporterapp.com/es/blog/wp-content/uploads/2022/05/que-ver-en-el-tunco-scaled.jpg?fit=2560%2C1707&ssl=1",
    },
    {
      id: "4",
      name: "Cerro Verde",
      description:
        "Parque nacional con impresionantes vistas de los volcanes Izalco, Santa Ana y Cerro Verde, además de senderos para caminatas.",
      location: "Departamento de Santa Ana",
      image:
        "https://www.istu.gob.sv/wp-content/uploads/2020/09/Cerro02-min-scaled.jpg",
    },
    {
      id: "5",
      name: "Lago de Coatepeque",
      description:
        "Un hermoso lago de origen volcánico rodeado de montañas, ideal para actividades acuáticas y relajación junto al agua.",
      location: "Departamento de Santa Ana",
      image:
        "https://elsalvador.travel/system/wp-content/uploads/2023/07/LagoCoatepeque01.jpg",
    },
    {
      id: "6",
      name: "Parque Nacional El Imposible",
      description:
        "Reserva natural con exuberante biodiversidad, cascadas y rutas de senderismo para los amantes de la naturaleza.",
      location: "Departamento de Ahuachapán",
      image:
        "https://elsalvador.travel/system/wp-content/uploads/2021/04/10012021-El-Imposible-APPEX-5.jpg",
    },
    {
      id: "7",
      name: "Suchitoto",
      description:
        "Pueblo colonial con calles empedradas, arte, cultura, y el Lago Suchitlán cercano para avistamiento de aves.",
      location: "Departamento de Cuscatlán",
      image:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/6f/7a/f0.jpg",
    },
    {
      id: "8",
      name: "Catedral Metropolitana de San Salvador",
      description:
        "Icono arquitectónico en la capital, con una mezcla de estilos y arte religioso, representando la historia del país.",
      location: "San Salvador, Departamento de San Salvador",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Catedral_Metropolitana_de_San_Salvador%2C_ElSalvador.jpg/640px-Catedral_Metropolitana_de_San_Salvador%2C_ElSalvador.jpg",
    },
    {
      id: "9",
      name: "Tazumal",
      description:
        "Sitio arqueológico con pirámides y ruinas mayas en la zona de Chalchuapa, ofreciendo vistas al Valle de las Hamacas.",
      location: "Departamento de Santa Ana",
      image:
        "https://elsalvador.travel/system/wp-content/uploads/2022/08/SantaAna.jpg",
    },
    {
      id: "10",
      name: "Paseo El Carmen",
      description:
        "Zona gastronómica y cultural con restaurantes, bares, tiendas de arte y entretenimiento nocturno en Santa Tecla.",
      location: "Santa Tecla, Departamento de La Libertad",
      image:
        "https://www.viajeroselsalvador.com/uploads/5/6/1/0/5610753/4994600_orig.png",
    },
  ];

  const categotia = [
    {
      id: 1,
      name: "Popular",
      icon: "campfire",
    },
    {
      id: 2,
      name: "Lake",
      icon: "brain",
    },
    {
      id: 3,
      name: "beach",
      icon: "beach",
    },
    {
      id: 4,
      name: "Mountain",
      icon: "image-filter-hdr",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [searchQuery]);

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <SafeAreaView>
          <View>
            <Searchbar
              style={styles.containerSearchbar}
              placeholder="Search"
              onChange={onChangeSearch}
              value={searchQuery}
            />
          </View>

          <FlatList
            data={categotia}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity>
                  <Chip
                    style={{
                      marginHorizontal: 5,
                      backgroundColor: colors.primary200,
                      borderColor: "white",
                      marginBottom: 40,
                    }}
                    icon={item.icon}
                  >
                    {item.name}
                  </Chip>
                </TouchableOpacity>
              );
            }}
            horizontal
          />
          <View style={{ marginBottom: 30 }}>
            <Text style={styles.tittle}>Lugares turisticos</Text>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity>
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
                        style={{ alignItems: "flex-start" }}
                      />
                    </View>
                  </TouchableOpacity>
                );
              }}
              horizontal
            />
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
