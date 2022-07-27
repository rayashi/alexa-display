import {useEffect, useState} from 'react';
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.content}>
      <View style={styles.box}>
        <Text style={styles.backTime}>88:88:88</Text>
        <Text style={styles.time}>{time.toLocaleTimeString()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e383e',
  },
  box: {
    padding: 20,
    borderRadius: 30,
    backgroundColor: '#484f54',
  },
  time: {
    fontSize: 150,
    fontFamily: 'Digital',
    color: '#68e1a1',
  },

  backTime: {
    fontSize: 150,
    fontFamily: 'Digital',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    color: '#41484d',
  },
});

export default DigitalClock;
