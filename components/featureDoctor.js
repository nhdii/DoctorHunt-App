import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import TextComponent from './textComponent';

const FeatureDoctor = ({image, name, cost, rating }) => {
  return (
    <View style={styles.container}>
        <View style={styles.doctorCard}>
            {/* Group chứa favoriteIcon và rating */}
            <View style={styles.favoriteRatingGroup}>
                <Image source={require('../assets/images/favoriteIcon.png')} style={styles.favoriteIcon} />
                <View style={styles.rating}>
                    <Image source={require('../assets/images/starIcon.png')} style={{width: 9, height: 9}} />
                    <TextComponent fontSize={10} fontWeight='500' lineHeight={11.85} color='rgba(103, 114, 148, 1)' style={{paddingLeft: 6}}>{rating}</TextComponent>

                </View>
            </View>

            {/* Avatar của doctor */}
            <Image source={image} style={styles.image} />

            {/* Group chứa tên doctor và chi phí */}
            <View style={styles.details}>
                <TextComponent fontSize={12} fontWeight='500' lineHeight={14.22} color='rgba(51, 51, 51, 1)' style={{paddingTop: 4}}>{name}</TextComponent>
                <TextComponent fontSize={10} fontWeight="300" lineHeight={10.67} color='rgba(51, 51, 51, 1)' style={{paddingTop: 3}}>
                    <Text style={{color: 'rgba(14, 190, 126, 1)'}}>$</Text> {cost}/hours
                </TextComponent>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({

    doctorCard:{
        width: 96, 
        height: 130,
        marginTop: 22,
        marginRight: 12,
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        borderRadius: 6,
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },

    favoriteRatingGroup: {
        flexDirection: 'row', 
        width: 77,
        height: 12,
        justifyContent: 'space-between', 
        paddingVertical: 8
    },

    favoriteIcon: {
        width: 10,
        height: 8.95,
    },

    rating: {
        flexDirection: 'row',
        height: 12,
    },
    
    image: {
        width: 54,
        height: 54,
        borderRadius: 27, 
        marginTop: 8, 
    },

    details: {
        alignItems: 'center',
        marginTop: 8, // Khoảng cách giữa avatar và group details
    },
});

export default FeatureDoctor;
