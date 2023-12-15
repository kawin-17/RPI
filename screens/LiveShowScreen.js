// LiveShowScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LiveShowScreen = ({ isRecording, onClose }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You are currently live!</Text>
      <Text style={styles.text}>{isRecording ? 'Recording is enabled' : 'Recording is disabled'}</Text>
      <Text style={styles.text}>Other users can join your live show here...</Text>
      <Text style={styles.closeButton} onPress={onClose}>Close Live Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
  },
});

export default LiveShowScreen;
