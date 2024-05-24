import React from 'react'
import { View, StyleSheet } from 'react-native'
import WeatherSearch from './components/weather/Search'
import WeatherInfo from './components/weather/Info'


const App = () => {
  return (
    <View style={styles.container}>
      <WeatherSearch />
      <WeatherInfo />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})

export default App