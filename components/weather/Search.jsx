import React from "react";
import { View, Button, StyleSheet } from "react-native";
import Input from "../Input";
import IconButton from "../IconButton";

const WeatherSearch = () => {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder="Search the weather of your city"
        numberOfLines={1}
      />
      <IconButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 0,
    height: 50,
  },
  buttonWrapper: {},
});

export default WeatherSearch;
