import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import Input from "../Input";
import IconButton from "../IconButton";

const WeatherSearch = ({ setSearch }) => {
  const [searchValue, setSearchValue] = useState(null);

  const onSubmit = () => {
    setSearch(searchValue);
  };
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder="Search the weather of your city"
        numberOfLines={1}
        onChange={setSearchValue}
      />
      <IconButton onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 0,
    height: 50,
  },
});

export default WeatherSearch;
