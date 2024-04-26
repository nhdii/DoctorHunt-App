import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

export default function OnBoardingScreen03() {
    const navigation = useNavigation();

    const handleSkip = ()=>{
        navigation.navigate('BottomNav');
    }

    return (
        <SafeAreaView style={styles.container}>

            {/* image container */}
            <View style={styles.imageContainer}>
                <View style={styles.ellipse154}>
                    <Image source={require('../assets/images/Ellipse154_3.png')} style={styles.image} />
                </View>
                <LinearGradient colors={['#0EBE7E', '#07D9AD']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.ellipse153} />
            </View>

            {/* Text container */}
            <View style={styles.textContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Easy Appointments
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
                <TouchableOpacity onPress={()=> navigation.navigate('BottomNav')} style={styles.styleButton}>
                    <Text style={styles.textButton}>
                        Get Started
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSkip}>
                    <Text style={styles.text}>
                        Skip
                    </Text>
                </TouchableOpacity>
            </View>

            <LinearGradient 
                colors={[ '#0EBE7E4D', '#FFFFFF' ]}
                start={{ x: 0.9, y: 0.4 }}
                end={{ x: 1, y: 0}}
                style={styles.ellipse143}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 38,
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
        top: -54,
        left: -64,
        borderRadius: 171, // Half of width or height to make it a perfect circle
        overflow: 'hidden',
        // backgroundColor: 'black',
        zIndex: -1,
    },

    textContainer: {
        width: 300,
        height: 108
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
        top: 10,
        width: 289,
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

    elipse143Container: {
        width: 216,
        height: 216,
        borderRadius: 108,
        position: 'absolute',
        bottom: -45,
        left: 212,
        zIndex: -1,
        backgroundColor: 'rgba(14, 190, 126, 0.3)'
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