import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { todayDate } from "../../utils/helper";

const WeatherInfo = ({ data }) => {
  const imageUrl = `https://openweathermap.org/img/w/${data.weather.icon}.png`;
  return (
    <View style={[styles.marginTop20, styles.textWhite, styles.container]}>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Image source={{ uri: imageUrl }} style={styles.weatherIcon} />
        <Text style={[styles.text, styles.bold, styles.textWhite]}>
          {data.weather.main}
        </Text>
      </View>
      <Text style={styles.text}>{todayDate()}</Text>
      <View style={styles.cityInfo}>
        <Text
          style={[styles.temperature, styles.marginTop20, styles.textWhite]}
        >
          {data.main.temp}&#176;
        </Text>
        <Text style={[styles.text, styles.city]}>{data.name}</Text>
      </View>
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
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  cityInfo: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  city: {
    fontSize: 32,
  },
  marginTop20: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
  textWhite: { color: "white" },
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
