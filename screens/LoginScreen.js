import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { StatusBar } from "expo-status-bar"

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = () => {

    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={{
                    uri: "https://radioplaybackindia.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-02-at-8.57.57-PM.jpeg"
                }}
                style={{ width: 250, height: 250, borderRadius: 100 }}
            />
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Email"
                    autoFocus
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)} />
                <Input
                    placeholder="Password"
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)} />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title={"Login"} />
            <Button containerStyle={styles.button} type='outline' title={"Register"} />
            <View style={{height: 100}} />
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: "white"
    }
})