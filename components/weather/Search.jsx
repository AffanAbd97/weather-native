import React from "react";
import { View, Button, StyleSheet } from "react-native";
import Input from "../Input";


const WeatherSearch = () => {
  return (
    <View>
      <Input
        placeholder="Search the weather of your city"
        numberOfLines={1}
      />
      <View style={styles.buttonWrapper}>
        <Button title="Search" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
  },
});

export default WeatherSearch;
