import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { HeartIcon as OutlineHeartIcon } from 'react-native-heroicons/outline'
import { HeartIcon as SolidHeartIcon } from 'react-native-heroicons/solid'
import TextComponent from './textComponent';

const FavouriteCard = ({ doctor }) => {

    const [isFavourite, toggleFavourite] = useState(false);
    const [isSolid, setIsSolid] = useState(false);

    const handleToggleIcon = () => {
        toggleFavourite(!isFavourite);
        setIsSolid(!isSolid);
    };

    const HeartIcon = isSolid ? SolidHeartIcon : OutlineHeartIcon;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleToggleIcon} style={styles.heartIconContainer}>
                <HeartIcon color={isFavourite ? 'red' : "rgba(103, 114, 148, 1)"} />
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                <Image source={doctor.image} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <TextComponent style={styles.doctorName}>{doctor.name}</TextComponent>
                <TextComponent style={styles.specialist}>{doctor.specialist}</TextComponent>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 180,
        borderRadius: 6,
        backgroundColor: "rgba(255, 255, 255, 1)",
        marginHorizontal: 10,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    heartIconContainer: {
        position: "absolute",
        top: 10,
        right: 10,
    },

    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
    },

    image: {
        width: 84,
        height: 84,
        borderRadius: 42,
    },

    textContainer: {
        alignItems: "center",
    },

    doctorName: {
        marginTop: 11,
        fontSize: 15,
        fontWeight: "bold",
        lineHeight: 17.78,
        letterSpacing: -0.3
    },

    specialist: {
        marginTop: 4,
        fontSize: 12,
        lineHeight: 14.22,
        letterSpacing: -0.3,
        color: "rgba(14, 190, 126, 1)",
    },
});

export default FavouriteCard;
