import React from "react";
import { useState } from "react";
import  {Text, View, StyleSheet, Image, TouchableOpacity, Button, Modal} from 'react-native';
export   function Ventana() {
  const [visibleModal, setVisibleModal] = React.useState(false);
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibleModal}
      onRequestClose={() => {
        setModal(!visibleModal);
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleModal}
        onRequestClose={() => {
          setModal(!visibleModal);
        }}
      >
        <View style={styles.modalContainer}>
          {avatares.map((avatar, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => console.log("Avatar seleccionado: " + avatar)}
            >
              <Image
                source={{ uri: avatar.avatar }}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          ))}
          <Button
            title="Actualizar Cerrar"
            onPress={() => setVisibleModal(false)}
          />
        </View>
      </Modal>
      ;
    </Modal>
  );
}

const styles = StyleSheet.create({ 
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Puedes ajustar la opacidad
      },
})
