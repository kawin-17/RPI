import React, { useLayoutEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomListItem from '../components/CustomListItem'
import LiveRadio from '../components/LiveRadio'
import { Avatar } from 'react-native-elements'
import { auth, db } from "../firebase";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"

const HomeScreen = ({ navigation }) => {
  const signOutuser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    })
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'RadioPlayBack- India',
      headerStyle: { backgroundColor: "#FFF" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "white",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutuser} activeOpacity={0.5}>  
          <Avatar
            rounded
            source={{
              uri: auth?.currentUser?.photoURL
            }}
            style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{
          flexDirection: 'row',
          justifyContent: "space-between",
          width: 80,
          marginRight:20
        }}>
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name='camerao' size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("AddChat")} activeOpacity={0.5}>
            <SimpleLineIcons name="pencil" size={24} color={'black'} />
          </TouchableOpacity>
        </View>
      )
    })
  }, [navigation])
  return (
    <SafeAreaView>
      <ScrollView>
        <LiveRadio />
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  avatar:{
    height: 37,
    width: 37
  }
})