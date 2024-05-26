import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function IconInfo({ center, text, icon }) {
  return (
    <View style={[styles.container, center && styles.borderLeftRight]}>
      <Image source={icon} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default IconInfo;

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    objectFit:'contain'
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 20,
  },
  borderLeftRight: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#fff",
  },
  text: {
    color: "#fff",
  },
});
