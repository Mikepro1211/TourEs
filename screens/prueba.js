import React, { useState } from "react";
import { Image, Text, View , StyleSheet } from "react-native";

const Screen = () => {
  const [imageUrl, setImageUrl] = useState("https://elsalvador.travel/system/wp-content/uploads/2020/10/joya2.jpg");
  const [text, setText] = useState(
    "9:41\n\n10+\n\nNusa Pedina\n\nBali, Indonesia"
  );

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageUrl} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
  },
});

export default Screen;