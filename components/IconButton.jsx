import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import Arr from ".././assets/icons/arrow.png";

const IconButton = ({ onAddPress }) => {
  return (
    <TouchableOpacity style={styles.cont} onPress={onAddPress}>
      <Image source={Arr} style={styles.image} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#FFC300",
    width: 50,
    height: 50,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    tintColor: "#fff",
    height: 25,
    width: 25,
  },
});
