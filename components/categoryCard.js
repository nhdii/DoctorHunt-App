// components/CategoryDoctorCard.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import TextComponent from './textComponent';
import { HeartIcon as OutlineHeartIcon } from 'react-native-heroicons/outline';
import { HeartIcon as SolidHeartIcon } from 'react-native-heroicons/solid';
import useAuth from '../hooks/useAuth';

const CategoryDoctorCard = ({doctor, imageSource, name, specialty, rating, views, isFavorite }) => {
    
    const {user, updateFavorites} = useAuth();
    const [isFavourite, setIsFavourite] = useState(isFavorite);
    const [isSolid, setIsSolid] = useState(isFavorite);

    useEffect(() => {
        if (user) {
            setIsFavourite(user.favorites.includes(doctor.id));
        }
    }, [user, doctor.id]);

    const handleToggleFavorite = async () => {
        const newState = !isFavourite;
        setIsFavourite(newState);
        setIsSolid(newState);

        if (user) {
            await updateFavorites(user.uid, doctor.id, newState);
        }
    };

    const HeartIcon = isSolid ? SolidHeartIcon : OutlineHeartIcon;

    return (
        <View style={styles.card}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.textContainer}>
                <View style={styles.firstLine}>
                    <TextComponent fontSize={18} fontWeight='bold' lineHeight={21.33} color='rgba(51, 51, 51, 1)'>{name}</TextComponent>
                    <TouchableOpacity onPress={handleToggleFavorite} style={styles.heartIcon}>
                        <HeartIcon color={isFavourite ? 'red' : 'rgba(103, 114, 148, 1)'} />
                    </TouchableOpacity>
                </View>
                <TextComponent fontSize={14} fontWeight='300' lineHeight={16.59} color='rgba(103, 114, 148, 1)'>{specialty}</TextComponent>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>
                        {"★".repeat(Math.floor(rating))}
                    </Text>
                    <TextComponent>{rating} ({views} views)</TextComponent>
                </View>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 335,
        height: 104,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 8,
        overflow: 'hidden',
        marginVertical: 10,
        flexDirection: 'row',
        marginLeft: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },

    image: {
        width: 82,
        height: 82,
        borderRadius: 8
    },

    firstLine:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    textContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },

    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    specialty: {
        fontSize: 14,
        color: '#677294',
        marginVertical: 5,
    },

    ratingContainer:{
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems: 'center'
    },

    rating: {
        fontSize: 14,
        color: '#FFD700',
    },

    favorite: {
        position: 'absolute',
        right: 10,
        top: 10,
        fontSize: 18,
    },
});

export default CategoryDoctorCard;
