import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { HeartIcon as OutlineHeartIcon } from 'react-native-heroicons/outline'
import { HeartIcon as SolidHeartIcon } from 'react-native-heroicons/solid'
import TextComponent from './textComponent';
import useAuth from '../hooks/useAuth';

const FavouriteCard = ({ doctor, isFavourite: initialIsFavourite, onToggleFavorite }) => {

    const { user, updateFavorites } = useAuth();

    const [isFavourite, setIsFavourite] = useState(initialIsFavourite);
    const [isSolid, setIsSolid] = useState(initialIsFavourite);

    useEffect(() => {
        setIsFavourite(initialIsFavourite);
        setIsSolid(initialIsFavourite);
    }, [initialIsFavourite]);

    const handleToggleFavorite = async () => {
        const newState = !isFavourite;
        setIsFavourite(newState);
        setIsSolid(newState);

        if (user) {
            await updateFavorites(user.uid, doctor.id, newState);
            if (onToggleFavorite) {
                onToggleFavorite();
            }
        }
    };

    const HeartIcon = isSolid ? SolidHeartIcon : OutlineHeartIcon;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleToggleFavorite} style={styles.heartIconContainer}>
                <HeartIcon color={isFavourite ? 'red' : "rgba(103, 114, 148, 1)"} />
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                <Image source={{ uri: doctor.image_url }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <TextComponent fontSize={15} fontWeight='bold' lineHeight={17.78} style={{marginTop: 11}}>{doctor.name}</TextComponent>
                <TextComponent fontSize={12} lineHeight={14.22} color='rgba(14, 190, 126, 1)' style={{marginTop: 4}}>{doctor.specialist}</TextComponent>
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

});

export default FavouriteCard;
