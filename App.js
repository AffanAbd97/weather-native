import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import WeatherSearch from "./components/weather/Search";
import WeatherInfo from "./components/weather/Info";
import { BASE_WEATHER_URL, API_KEY } from "@env";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  const [city, setCity] = useState("kudus");
  const [status, setStatus] = useState("");
  const [weatherData, setWeatherData] = useState();
  console.log(BASE_WEATHER_URL);
  console.log(API_KEY);

  const fetchWeather = async (city) => {
    setStatus("loading");
    axios
      .get(`${BASE_WEATHER_URL}?q=${city}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed();
        data.main.temp -= 273.15;
        data.main.temp = data.main.temp.toFixed();
        data.weather = data.weather[0];
        setWeatherData(data);
        setStatus("success");
      })
      .catch((error) => {
        
        setStatus("error");
      });
  };
  useEffect(() => {
    fetchWeather(city);
  }, [city]);
  const renderComponent = () => {
    switch (status) {
      case "loading":
        return (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="large" />
          </View>
        );
      case "success":
        return <WeatherInfo data={weatherData} />;
      case "error":
        return (
          <Text>
            Something went wrong. Please try again with a correct city name.
          </Text>
        );
      default:
        return;
    }
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#3d6cc1", "#00d4ff"]}
        style={styles.linearGradient}
      >
        <View style={styles.content}>{renderComponent()}</View>
        <WeatherSearch />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  content: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 32,
  },
});

export default App;
