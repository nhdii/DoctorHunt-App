import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

export default function OnBoardingScreen02() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>

        {/* image container */}
        <View style={styles.imageContainer}>
            <View style={styles.ellipse154}>
                <Image source={require('../assets/images/Ellipse154_2.png')} style={styles.image} />
            </View>
            <LinearGradient colors={['#0EBE7E', '#07D9AD']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.ellipse153} />
        </View>

        {/* Text container */}
        <View style={styles.textContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Choose Best Doctors
                </Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.content}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of it over 2000 years old.
                </Text>
            </View>
        </View>

        {/* Group container */}
        <View style={styles.groupContainer}>
            <TouchableOpacity onPress={()=> navigation.navigate('OnBoarding03')} style={styles.styleButton}>
                <Text style={styles.textButton}>
                    Get Started
                </Text>
            </TouchableOpacity>

            <View>
                <Text style={styles.text}>
                    Skip
                </Text>
            </View>
        </View>

        <LinearGradient 
            colors={[ '#0EBE7E4D', '#FFFFFF' ]}
            start={{ x: 0.9, y: 0.4 }}
            end={{ x: 1, y: 0}}
            style={styles.ellipse143}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: "#ffffff",
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageContainer:{
        width: 460,
        height: 447,
        justifyContent: 'center',
        alignItems: 'center',
    },

    ellipse154: {
        // position: 'absolute',
        width: 336,
        height: 336,
        borderRadius: 168, 
        overflow: 'hidden',
        backgroundColor: '#FFFFFF', // Fallback color

    },

    image: {
        width: '100%', 
        height: '100%', 
        resizeMode: 'cover', 
    },

    ellipse153: {
        position: 'absolute',
        width: 342,
        height: 342,
        top: -20,
        left: 175,
        borderRadius: 171, //chia đôi width để tạo hình tròn
        zIndex: -1,
    },

    textContainer:{
        width: 304,
        height: 115,
    },

    title:{
        height: 33,
        textAlign: 'center',
        fontFamily: 'Rubik', 
        fontSize: 28, 
        fontWeight: '500', 
        lineHeight: 33.18, 
        letterSpacing: -0.3,
        color: '#333333'
    },

    content:{
        // width: 289,
        top: 10,
        textAlign: 'center',
        fontFamily: 'Rubik', 
        fontSize: 14, 
        fontWeight: '400', 
        lineHeight: 23.18, 
        letterSpacing: -0.3,
        color: '#677294E5',
    },

    groupContainer:{
        width: 295,
        height: 180,
        top: 48,
        alignItems: 'center',
    },

    styleButton:{
        width: 295,
        height: 54,
        borderRadius: 10,
        backgroundColor: '#0EBE7F', 
        alignItems: 'center',
        justifyContent: 'center'
    },

    textButton:{
        fontFamily: 'Rubik',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 21.33,
        color: '#FFFFFF'
    },

    text:{
        top: 10,
        fontSize: 14, 
        fontWeight: '400',
        fontFamily: 'Rubik',
        lineHeight: 23.18,
        letterSpacing: -0.3,
        color: '#677294'
    },

    ellipse143: {
        width: 216,
        height: 216,
        position: 'absolute',
        top: 576,
        left: 194,
        borderRadius: 108,
        zIndex: -1
    },



})