import React, { useEffect, useMemo, useRef } from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorBase,
  Alert,
  Image,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  setIsLoading,
  setWeatherData,
  setSearch,
} from '../../store/slices/weatherSlice';

//https://api.openweathermap.org/data/2.5/weather?lat=31.1471&lon=75.3412&appid=5584aad15b98f225c7d810ea20b9bb96&units=metric

const HomeScreen = () => {
  const state = useSelector(state => state.weather);
  const dispatch = useDispatch();

  const allIcons = {
    '01d': require('../../assets/images/sunny.png'),
    '02d': require('../../assets/images/splashicon.png'),
    '03d': require('../../assets/images/cloudy.png'),
    '04d': require('../../assets/images/cloudy.png'),
    '09d': require('../../assets/images/rainy.png'),
    '10d': require('../../assets/images/rainy_sun.png'),
    '11d': require('../../assets/images/thunder_strom.png'),
    '13d': require('../../assets/images/snowfall.png'),
    '01n': require('../../assets/images/black_moon.png'),
    '02n': require('../../assets/images/cloud_hide_moon.png'),
    '03n': require('../../assets/images/cloudy.png'),
    '04n': require('../../assets/images/cloudy.png'),
    '09n': require('../../assets/images/rainy.png'),
    '10n': require('../../assets/images/moon_with_rain.png'),
    '11n': require('../../assets/images/thunder_strom.png'),
     '13n': require('../../assets/images/snowfall.png'),
  };
  const icon = useMemo(
    () =>
      state.weatherData?.weather?.length > 0
        ? allIcons[state.weatherData?.weather[0]?.icon]
        : allIcons['01d'],
    [state.weatherData],
  );

  console.log('state.weatherData?.weather: ', state.weatherData?.weather);
  const search = async (city = 'Manali') => {
    try {
      console.log(
        'process.env.OPEN_WEATHER_MAP_API_KEY',
        process.env.OPEN_WEATHER_MAP_API_KEY,
      );
      if (!process.env.OPEN_WEATHER_MAP_API_KEY) return;
      // const url = `https://api.openweathermap.org/data/2.5/weather?lat=32.1024&lon=77.5619&appid=5584aad15b98f225c7d810ea20b9bb96&units=metric`;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`;
      let response = await fetch(url);
      response = await response.json();
      console.log(
        'This is response from api: ',
        JSON.stringify(response, null, 2),
      );
      if (response.cod == 200) {
        dispatch(setWeatherData(response));
        dispatch(setSearch(''));
        Keyboard.dismiss();
      } else {
        throw Error(response?.message);
      }
    } catch (error) {
      console.log('This is error:', error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
  console.log('state:', state);
  useEffect(() => {
    search("mohali");
  }, []);

  // if(!isWeatherData){
  //   return <ActivityIndicator/>
  // }

  return (
    <SafeAreaView style={styles.container}>
      {state.isLoading ? (
        <ActivityIndicator color="black" />
      ) : (
        <View>
          <View style={styles.searchPlace}>
            <TextInput
              onChangeText={value => dispatch(setSearch(value))}
              value={state.searchKeyWord}
              style={styles.InputData}
              placeholder="Search"
            />
            <Pressable
              style={styles.searchButton}
              onPress={() => search(state.searchKeyWord)}
            >
              <Image
                style={styles.search}
                source={require('../../assets/images/search.png')}
              />
            </Pressable>
          </View>
          <View style={styles.mainContent}>
            <Image style={styles.sunny} source={icon} />
            <Text style={styles.temperature}>
              {Math.floor(state.weatherData?.main.temp)}°C
            </Text>
            <Text style={styles.location}>{state.weatherData.name}</Text>
          </View>
          <View style={styles.weatherData}>
            <View style={styles.humidityCol}>
              <Image
                style={styles.humidity}
                source={require('../../assets/images/humidity.png')}
              />
              <View>
                <Text style={styles.detailOfHumidityAndWind}>
                  {state.weatherData.main.humidity}%
                </Text>
                <Text style={styles.detailOfHumidityAndWind}>Humidity</Text>
              </View>
            </View>
            <View style={styles.windcol}>
              <Image
                style={styles.wind}
                source={require('../../assets/images/wind.png')}
              />
              <View>
                <Text style={styles.detailOfHumidityAndWind}>
                  {state.weatherData.wind.speed} Km/h
                </Text>
                <Text style={styles.detailOfHumidityAndWind}>Wind Speed</Text>
              </View>
            </View>
          </View>
          {/* <Text>{state.weatherData.name}</Text>
          <Text>{state.weatherData.main.temp}</Text>
          <Text>{state.weatherData.id}</Text> */}
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
