import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

import song1 from '../assets/playlist/sample.mp3';

const RoomScreen = () => {
  const [sound, setSound] = useState();
  const playlist = [song1];
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    const loadAudio = async () => {
      const { sound } = await Audio.Sound.createAsync(
        playlist[currentSongIndex],
        { shouldPlay: true, isLooping: true },
        onPlaybackStatusUpdate
      );

      setSound(sound);
    };

    loadAudio();

    // Cleanup when the component unmounts
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [currentSongIndex]);

  const onPlaybackStatusUpdate = (status) => {
    // You can add custom logic here if needed
  };

  const handlePausePress = async () => {
    if (sound) {
      await sound.pauseAsync();
    }
  };

  const handleResumePress = async () => {
    if (sound) {
      await sound.playAsync();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.controlButton} onPress={handlePausePress}>
          <Text style={styles.controlButtonText}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={handleResumePress}>
          <Text style={styles.controlButtonText}>Resume</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  controlButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
  },
  controlButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RoomScreen;
