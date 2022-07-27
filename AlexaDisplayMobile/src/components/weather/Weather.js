import {useEffect, useState} from 'react';
import React from 'react';
import {Text, StyleSheet, View, PermissionsAndroid} from 'react-native';
import axios from 'axios';
import getCurrentGeoLocation from '../../shared/Geolocation';
import {API_KEY} from '../../../openweather-key';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const Weather = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      await PermissionsAndroid.request(
        'android.permission.ACCESS_FINE_LOCATION',
      );
      const {coords} = await getCurrentGeoLocation();
      const response = await axios.get(
        `${API_URL}?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric&lang=pt`,
      );
      setData(response.data);
    };
    fetch();
  }, []);

  if (!data) {
    return;
  }

  return (
    <View style={styles.content}>
      <Text style={styles.tempeture}>{data?.name}</Text>
      <Text style={styles.tempeture}>{Math.round(data?.main?.temp)}°C</Text>
      <Text style={styles.humidity}>Umidade {data?.main?.humidity}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e383e',
  },
  tempeture: {
    fontSize: 60,
    color: 'white',
  },
  humidity: {
    fontSize: 30,
    color: 'white',
  },
});

export default Weather;
