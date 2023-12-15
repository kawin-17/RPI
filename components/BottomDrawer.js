// BottomDrawer.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const BottomDrawer = ({ isVisible, onClose, onSelectOption }) => {
  const [isRecording, setRecording] = useState(false);

  const toggleRecording = () => {
    setRecording(!isRecording);
  };

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose} // Disable closing when clicking on the backdrop
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <View style={styles.drawer}>
        <View style={styles.draggableLineContainer}>
          <TouchableOpacity onPress={onClose} style={styles.draggableLine}>
            <Ionicons name="ios-arrow-down" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => onSelectOption('Option 1')}>
          <Text style={styles.option}>Go Live Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSelectOption('Option 2')}>
          <Text style={styles.option}>Schedule a Live Room</Text>
        </TouchableOpacity>
        <View style={styles.checkboxContainer}>
          <CheckBox
            title="Record Live Show"
            checked={isRecording}
            onPress={toggleRecording}
            containerStyle={styles.checkbox}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  drawer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  draggableLineContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  draggableLine: {
    width: 40,
    height: 5,
    backgroundColor: 'black',
    borderRadius: 5,
    marginBottom: 5,
  },
  option: {
    fontSize: 18,
    marginVertical: 10,
  },
  checkboxContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
});
export default BottomDrawer;
