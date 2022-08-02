import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import DigitalClock from './src/components/clock/DigitalClock';
import Weather from './src/components/weather/Weather';

const DynamicPage = ({mode}) => {
  switch (mode) {
    case 'clock':
      return <DigitalClock />;
    case 'weather':
      return <Weather />;
    default:
      return;
  }
};

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
      <DynamicPage mode={mode} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#2e383e',
  },
});

export default App;
