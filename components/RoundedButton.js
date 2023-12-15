// RoundedButton.js

import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import BottomDrawer from './BottomDrawer';

const RoundedButton = () => {
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  const openDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const selectOption = (option) => {
    // Handle the selected option as needed
    console.log('Selected option:', option);
    closeDrawer();
  };

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={openDrawer} activeOpacity={0.5}>
        <View style={styles.button}>
          <Ionicons name="md-mic" size={24} color="white" />
          <FontAwesome name="plus" size={24} color="white" style={styles.plusIcon} />
        </View>
      </TouchableOpacity>
      <BottomDrawer isVisible={isDrawerVisible} onClose={closeDrawer} onSelectOption={selectOption} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  button: {
    backgroundColor: '#2C6BED',
    borderRadius: 25,
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'Column',
  },
  plusIcon: {
    margin: 5,
    fontSize: 18
  },
});

export default RoundedButton;
