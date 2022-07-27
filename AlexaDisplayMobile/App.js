import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import DigitalClock from './src/components/clock/DigitalClock';
import Weather from './src/components/weather/Weather';

const App: () => Node = () => {
  const [mode, setMode] = useState('clock');
  useEffect(() => {
    const subscriber = firestore()
      .collection('Mode')
      .doc('current')
      .onSnapshot(doc => setMode(doc?.data()?.value));

    return () => subscriber();
  }, []);

  return (
    <SafeAreaView style={styles.content}>
      <StatusBar hidden />
      {mode === 'clock' ? <DigitalClock /> : <Weather />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default App;
