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
      placeholderTextColor={'#f0f0f0'}
      onChangeText={onChange}
      defaultValue={text}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "#fff",
    padding: 10,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    color: "#fff",
  },
  container: {},
});

export default Input;
