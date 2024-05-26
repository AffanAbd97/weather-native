import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { capEachWord, todayDate } from "../../utils/helper";
import IconInfo from "../IconInfo";

import WindIcon from "../.././assets/icons/wind.png";
import EyeIcon from "../.././assets/icons/eye.png";
import WaterIcon from "../.././assets/icons/water.png";
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
      <Text style={styles.text}>{capEachWord(data.weather.description)}</Text>

      <View style={styles.info}>
        <IconInfo icon={EyeIcon} text={`${data.visibility} Km`} />
        <IconInfo
          center={true}
          icon={WindIcon}
          text={`${data.wind.speed} m/s`}
        />
        <IconInfo icon={WaterIcon} text={`${data.main.humidity} %`} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",

    gap: 2,
    marginTop: 20,
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
