// HomeScreen.js

import React, { useLayoutEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import CustomListItem from '../components/CustomListItem';
import { Avatar } from 'react-native-elements';
import { auth } from '../firebase';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import RoundedButton from '../components/RoundedButton';

const HomeScreen = ({ navigation }) => {
  const [isLiveShow, setLiveShow] = useState(false);
  const [isRecording, setRecording] = useState(false);

  const signOutuser = () => {
    auth.signOut().then(() => {
      navigation.replace('Login');
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'RadioPlayBack- India',
      headerStyle: { backgroundColor: '#FFF' },
      headerTitleStyle: { color: 'black' },
      headerTintColor: 'white',
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutuser} activeOpacity={0.5}>
            <Avatar
              rounded
              source={{
                uri: auth?.currentUser?.photoURL,
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.chatContainer}>
        <Text style={styles.headingText}>Live Radio</Text>
        <View style={styles.container}>
          <View style={styles.content}>
            <Image
              raised
              source={{
                uri: 'https://radioplaybackindia.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-02-at-8.57.57-PM.jpeg',
              }}
              style={styles.img}
            />
            <View style={styles.subContainer}>
              <Text style={styles.text}>Live Radio</Text>
              <TouchableOpacity onPress={() => navigation.navigate('RoomScreen')}>
                <Text style={styles.button}>Join Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.headingText}>Music On Demand</Text>
        <TouchableOpacity onPress={() => { navigation.navigate('ChatScreen', { id: 'Music on Demand', chatName: 'Music on Demand' }) }}>
          <CustomListItem />
        </TouchableOpacity>
      </ScrollView>
      <RoundedButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 37,
    width: 37,
  },
  chatContainer: {
    height: '100%',
  },
  container: {
    height: 170,
    width: 350,
    backgroundColor: '#FFB534',
    borderRadius: 20,
    marginHorizontal: 20,
  },
  content: {
    margin: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 10,
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
    backgroundColor: '#000000',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default HomeScreen;
