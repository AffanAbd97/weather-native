import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const Input = ({
  text,
  onChange,
  multiline = false,
  placeholder,
  numberOfLines,
}) => (
  <View style={styles.container}>
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChange}
      defaultValue={text}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "#DDDDDD",
    padding: 10,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  container: {
  
  },
});

export default Input;
