import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import GradientCircle from '../components/gradientCircle';
import TextComponent from '../components/textComponent';
import ButtonComponent from '../components/buttonComponent';

export default function OnBoardingScreen({ imageSource, title, content, nextScreen, ellipse153Position }) {
    const navigation = useNavigation();

    const handleSkip = () => {
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar
                animated={true}
                backgroundColor='transparent'
                translucent={true}
            />

            {/* image container */}
            <View style={styles.imageContainer}>
                <View style={styles.ellipse154}>
                    <Image source={imageSource} style={styles.image} />
                </View>
                <LinearGradient colors={['rgba(14, 190, 126, 1)', 'rgba(7, 217, 173, 1)']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={[styles.ellipse153, ellipse153Position]} />
            </View>

            {/* Text container */}
            <View style={styles.textContainer}>
                <View style={styles.titleContainer}>
                    <TextComponent style={styles.title}>{title}</TextComponent>
                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.content}>
                        {content}
                    </Text>
                </View>
            </View>

            {/* BUtton container */}
            <View style={styles.buttonContainer}>
                <ButtonComponent
                    title="Get Started"
                    onPress={() => navigation.navigate(nextScreen)}
                    width={295}
                    height={54}
                    borderRadius={6}
                    textSize={18}
                />

                <TouchableOpacity onPress={handleSkip}>
                    <Text style={styles.textButtonStyle}>
                        Skip
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.elipse143Container}>
                <GradientCircle size={216} colors={['rgba(14, 190, 126, 0.3)', 'rgba(255, 255, 255, 1)']} color="rgba(14, 190, 126, 0.3)" />
            </View>    
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 32,
        flexDirection: 'column',
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: 'center',
    },

    imageContainer: {
        width: 460,
        height: 447,
        justifyContent: 'center',
        alignItems: 'center',
    },

    ellipse154: {
        width: 336,
        height: 336,
        borderRadius: 168, 
        overflow: 'hidden',
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
        borderRadius: 171,
        overflow: 'hidden',
        zIndex: -1,
    },

    title: {
        width: 295,
        height: 33,
        textAlign: 'center',
        fontSize: 28, 
        fontWeight: '500', 
        lineHeight: 33.18,
        color: '#333333'
    },

    content: {
        top: 10,
        width: 289,
        textAlign: 'center',
        fontSize: 14, 
        fontWeight: '400', 
        lineHeight: 23.18, 
        color: '#677294E5',
    },

    buttonContainer: {
        height: 180,
        top: 48,
        alignItems: 'center',
    },

    textButtonStyle: {
        top: 10,
        fontSize: 14, 
        fontWeight: '400',
        lineHeight: 23.18,
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
})
