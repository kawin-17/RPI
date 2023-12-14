import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import React from 'react'

const LiveRadio = () => {
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
                    <Button containerStyle={styles.button} title={"Join Live"} type='outline'/>
                </View>
            </View>
        </View>
    )
}

export default LiveRadio

const styles = StyleSheet.create({
    container: {
        height: 170,
        width: 350,
        backgroundColor: "#FFB534",
        borderRadius: 20,

    },
    content:{
        margin: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    subContainer: {
        height: 200,
        width: 150,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    img: {
        height: 140,
        width: 140,
        borderRadius: 100,
    },
    text: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        color: 'white',
        backgroundColor: "#000000",
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
})