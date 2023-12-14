import React, { useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Input, Button, Text } from "react-native-elements";
import { StatusBar } from 'expo-status-bar';
import { auth, db } from "../firebase";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const RegisterScreen = ({ navigation }) => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [imageURL , setImageURL] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back To Login",
        })
    }, [navigation])

    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(authUser =>{
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: imageURL || "https://th.bing.com/th/id/OIP.lkVN1WDlcV2jQCq-9LT7-wHaIJ?rs=1&pid=ImgDetMain" 
            })
        })
        .catch((error) => alert(error.message));
    };
    return (
        <View behavior='padding' style={styles.container}>
            <StatusBar style="light " />
            <Text h3 style={{ marginBottom: 50 }}>
                Create an Account
            </Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Full Name'
                    type='text'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder='Email'
                    type='email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder='Password'
                    type='password'
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Input
                    placeholder='Profile Picture URL (optional)'
                    type='password'
                    value={imageURL}
                    onChangeText={(text) => setImageURL(text)}
                    onSubmitEditing={register}
                />
            </View>
            <Button
             raised
             onPress={register}
             title='Register'
             containerStyle={styles.button}
            />
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10
    },
    button: {
        width: 200,
        marginTop: 10
    },
    inputContainer:{
        width: 300,
    }
})