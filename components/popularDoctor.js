import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';

const PopularDoctor = ({image, name, role, rating }) => {
  return (
    <View style={styles.container}>
        <View style={styles.doctorCart}>
            {/* image */}
            <Image source={image} style={styles.image} />

            {/* Details */}
            <View style={styles.details}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.role}>{role}</Text>
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

  name: {
    fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 2,
    lineHeight: 21.33,
    letterSpacing: -0.3,
    color: 'rgba(51, 51, 51, 1)'
  },
  role: {
    fontFamily: 'Rubik',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 2,
    lineHeight: 14.22,
    letterSpacing: -0.3,
    color: 'rgba(51, 51, 51, 1)'
  },
  rating: {
    flexDirection: 'row',
  },
});

export default PopularDoctor;
