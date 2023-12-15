import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Input, Button, Text, CheckBox } from "react-native-elements";
import { StatusBar } from 'expo-status-bar';
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back To Login",
        });
    }, [navigation]);

    const register = () => {
        if (!acceptTerms) {
            alert('Please accept the terms and conditions before registering.');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(authUser => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: imageURL || "https://th.bing.com/th/id/OIP.lkVN1WDlcV2jQCq-9LT7-wHaIJ?rs=1&pid=ImgDetMain"
                }).then(() => {
                    navigation.replace('RoomScreen', { username: name });
                });
            })
            .catch((error) => alert(error.message));
    };
    const openTermsAndConditions = () => {
        // Implement the navigation to your terms and conditions screen or display them in a modal
        // For example:
        // navigation.navigate('TermsAndConditionsScreen');
        alert('Terms and Conditions: Your terms and conditions text goes here.');
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
                <CheckBox
                    title="I accept the terms and conditions"
                    checked={acceptTerms}
                    onPress={() => setAcceptTerms(!acceptTerms)}
                    containerStyle={styles.checkboxContainer}
                />
                <TouchableOpacity onPress={openTermsAndConditions} style={styles.termsLinkContainer}>
                    <Text style={styles.termsLink}>Read Terms and Conditions</Text>
                </TouchableOpacity>
            </View>
            <Button
                raised
                onPress={register}
                title='Register'
                containerStyle={styles.button}
            />
        </View>
    );
};

export default RegisterScreen;

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
    inputContainer: {
        width: 300,
    },
    checkboxContainer: {
        backgroundColor: 'white',
        borderWidth: 0,
        margin: 0,
        padding: 0,
    },
    termsLinkContainer: {
        alignItems: 'center', // Center the link horizontally
        marginTop: 10,
        marginBottom: 10
    },
    termsLink: {
        color: '#007BFF',
        marginTop: 10,
        textDecorationLine: 'underline',
    },
});
