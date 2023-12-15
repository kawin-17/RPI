// LiveRadio.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LiveRadio = ({ navigation }) => {
  const [isLive, setIsLive] = useState(false);

  const startLiveChat = () => {
    // Implement logic to start a live voice chat (e.g., integrate with a real-time communication service)
    // For now, let's just toggle the live status
    setIsLive(!isLive);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          raised
          source={{
            uri: "https://radioplaybackindia.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-02-at-8.57.57-PM.jpeg"
          }}
          style={styles.img}
        />
        <View style={styles.subContainer}>
          <Text style={styles.text}>Live Radio</Text>
          <TouchableOpacity onPress={startLiveChat}>
            <Text style={styles.button}>{isLive ? 'End Live' : 'Start Live'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 170,
    width: 350,
    backgroundColor: "#FFB534",
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20, // Add margin to separate from other components
  },
  content: {
    margin: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  subContainer: {
    height: 200,
    width: 150,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  img: {
    height: 140,
    width: 140,
    borderRadius: 100,
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    color: 'white',
    backgroundColor: "#000000",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default LiveRadio;
