import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { todayDate } from "../../utils/helper";

const WeatherInfo = ({ data }) => {
  const imageUrl = `https://openweathermap.org/img/w/${data.weather.icon}.png`;
  return (
    <View style={styles.marginTop20}>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Image source={{ uri: imageUrl }} style={styles.weatherIcon} />
        <Text style={[styles.text, styles.bold]}>{data.weather.main}</Text>
      </View>
      <Text style={styles.text}>{todayDate()}</Text>
      <Text style={styles.text}>The weather of {data.name}</Text>
      <Text style={[styles.temperature, styles.marginTop20]}>
        {data.main.temp}C
      </Text>
      <Text style={styles.text}>{data.weather.description}</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Visibility :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>
          {data.visibility} km
        </Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Wind Speed :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>
          {data.wind.speed} m/s
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
  bold: {
    fontWeight: "700",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  temperature: {
    fontWeight: "700",
    fontSize: 80,
    textAlign: "center",
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
});

export default WeatherInfo;
