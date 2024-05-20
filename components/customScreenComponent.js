import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ButtonComponent from './buttonComponent';
import TextComponent from './textComponent';

const CustomScreenComponent = ({ image, title, content, button }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={styles.ellipse}>
                    <Image source={image} style={styles.image} />
                </View>
            </View>
            <View style={styles.textContainer}>
                <TextComponent style={styles.title}>{title}</TextComponent>
                <TextComponent style={styles.content}>{content}</TextComponent>
            </View>
            <View>
                <ButtonComponent 
                    title={button.text}
                    onPress={button.onPress}
                    width={295}
                    height={54}
                    borderRadius={6}
                    textSize={18}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    
    imageContainer: {
        marginTop: 94,
        marginBottom: 40
    },

    ellipse: {
        width: 214,
        height: 214,
        borderRadius: 107,
        backgroundColor: 'rgba(198, 239, 229, 0.76)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textContainer: {
        alignItems: 'center',
        marginBottom: 33
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 26.07,
        letterSpacing: -0.3,
        color: 'rgba(34, 34, 34, 1)'
    },

    content: {
        width: 303,
        marginTop: 14,
        fontWeight: '400',
        lineHeight: 23.18,
        letterSpacing: -0.3,
        color: 'rgba(103, 114, 148, 1)',
        textAlign: 'center',
    },

    buttonContainer: {
        marginTop: 20,
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default CustomScreenComponent;
