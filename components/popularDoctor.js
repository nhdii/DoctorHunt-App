import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import TextComponent from './textComponent';

const PopularDoctor = ({image, name, role, rating }) => {
  return (
    <View style={styles.container}>
        <View style={styles.doctorCart}>
            {/* image */}
            <Image source={image} style={styles.image} />

            {/* Details */}
            <View style={styles.details}>
                <TextComponent fontSize={18} fontWeight='500' lineHeight={21.33} color='rgba(51, 51, 51, 1)' style={{marginBottom: 2}}>{name}</TextComponent>
                <TextComponent fontSize={12} fontWeight='400' lineHeight={14.22} color='rgba(51, 51, 51, 1)' style={{marginBottom: 2}}>{role}</TextComponent>
                <View style={styles.rating}>
                    <Text>{'⭐'.repeat(rating)}</Text>
                </View>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({


  doctorCart:{
    width: 190, 
    height: 264,
    marginRight: 15,
    marginTop: 22,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor:'rgba(255, 255, 255, 1)'
  },

  image: {
    width: '100%',
    height: 180,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },

  details: {
    height: 55,
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 22,
  },

  rating: {
    flexDirection: 'row',
  },
});

export default PopularDoctor;
