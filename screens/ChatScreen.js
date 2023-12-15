// ChatScreen.js
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { auth, db } from '../firebase';
import { collection, query, addDoc, orderBy, onSnapshot } from 'firebase/firestore';
import { Avatar } from 'react-native-elements';

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const { id, chatName } = route.params || {};

  useLayoutEffect(() => {
    navigation.setOptions({
      title: chatName,
      headerBackTitleVisible: false,
    });
  }, [navigation, messages]);

  const sendMessage = async () => {
    if (input) {
      await addDoc(collection(db, 'chats', id, 'messages'), {
        timestamp: new Date(),
        message: input,
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoURL: auth.currentUser.photoURL,
      });

      setInput('');
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'chats', id, 'messages'), orderBy('timestamp', 'asc')),
      (snapshot) => {
        const formattedMessages = formatMessages(snapshot.docs.map((doc) => doc.data()));
        setMessages(formattedMessages);
      }
    );

    return unsubscribe;
  }, [id]);

  const formatMessages = (messageArray) => {
    const formattedMessages = [];

    for (let i = 0; i < messageArray.length; i++) {
      const currentMessage = messageArray[i];
      const previousMessage = messageArray[i - 1];

      const currentDate = new Date(currentMessage.timestamp?.seconds * 1000);
      const previousDate = previousMessage
        ? new Date(previousMessage.timestamp?.seconds * 1000)
        : null;

      // Check if the current message is on a different day than the previous message
      if (
        !previousDate ||
        currentDate.toDateString() !== previousDate.toDateString()
      ) {
        formattedMessages.push({
          id: `date-${currentDate.toISOString()}`,
          isDate: true,
          date: currentDate,
        });
      }

      formattedMessages.push(currentMessage);
    }

    return formattedMessages;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={styles.container}>
        {messages.map((item, index) => (
          <View key={index} style={styles.messageContainer}>
            {item.isDate ? (
              <View style={styles.dateContainer}>
                <Text style={styles.dateText}>{item.date.toDateString()}</Text>
              </View>
            ) : (
              <>
                <Avatar
                  rounded
                  source={{
                    uri:
                      item.photoURL ||
                      'https://th.bing.com/th/id/OIP.lkVN1WDlcV2jQCq-9LT7-wHaIJ?rs=1&pid=ImgDetMain',
                  }}
                />
                <View style={styles.messageContent}>
                  <View style={styles.messageHeader}>
                    <Text style={styles.sender}>{item.displayName}</Text>
                    <Text style={styles.timestamp}>
                      {new Date(item.timestamp?.seconds * 1000).toLocaleTimeString()}
                    </Text>
                  </View>
                  <Text style={styles.messageText}>{item.message}</Text>
                </View>
              </>
            )}
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TextInput
          placeholder="Type a message"
          style={styles.textInput}
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
          <Text style={styles.sendButton}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  dateContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  dateText: {
    color: 'grey',
  },
  messageContent: {
    marginLeft: 10,
    marginRight: 10
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  sender: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  timestamp: {
    color: 'grey',
  },
  messageText: {},
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: 'transparent',
    backgroundColor: '#ECECEC',
    padding: 10,
    color: 'grey',
    borderRadius: 30,
  },
  sendButton: {
    color: '#2B68E6',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ChatScreen;
