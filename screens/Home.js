import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  FlatList,
  ScrollView,
  Touchable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import TabNavigation from "../navigation/TabNavigation";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const Tab = createMaterialBottomTabNavigator();



export default function Home({ navigation }) {
  return (
    <>
     <TabNavigation/>
    </>
  );
}

const styles = StyleSheet.create({
  categoriasContainer: {
    backgroundColor: "#fffFFF",
    padding: 10,
  },
  categorias: {
    width: 100,
    height: 50,
  },
  container: {
    backgroundColor: "#fff",
    width: 350,
    height: 50,
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 30,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  item: {
    padding: 10,
    borderBottomWidth: 1,
  },
  image: {
    width: 100,
    height: 20,
  },
  name: {
    fontSize: 18,
  },
  type: {
    fontSize: 16,
  },

  item: {
    // ...
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  item: {
    // ...
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
});
