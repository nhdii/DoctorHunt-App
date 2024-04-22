import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PopularDoctor = ({title, hideSeeAll, image, name, role, rating }) => {
  return (
    <View style={styles.container}>
        <View style={styles.headline}>
            <Text style={styles.title}>
                {title}
            </Text>

            {
                !hideSeeAll && (
                    <TouchableOpacity>
                        <Text style={{fontSize: 18}}>See All</Text>
                    </TouchableOpacity>
                )
            }
        </View>

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
  container: {
    flexDirection: 'column',
    marginBottom: 16,
    paddingHorizontal: 16,
  },

  headline:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between'
  },

  title:{
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.33,
    color: 'rgba(51, 51, 51, 1)'    
  },

  doctorCart:{
    width: 190, 
    height: 264,
    marginTop: 0,
    borderTopStartRadius: 12, 
    borderTopEndRadius: 12,
    alignItems: 'center'
  },

  image: {
    width: '100%',
    height: 180,
    borderTopWidth: 12,
    borderBottomWidth: 2,
  },

  details: {
    alignItems: 'center',
    marginTop: 14,
    flex: 1,
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
