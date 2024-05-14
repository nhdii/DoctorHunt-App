import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { HeartIcon as OutlineHeartIcon } from 'react-native-heroicons/outline'
import { HeartIcon as SolidHeartIcon } from 'react-native-heroicons/solid'
import TextComponent from './textComponent';
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from './buttonComponent';

export default function DoctorDetailCard({ doctor, showBookNowButton = true, cardHeight = 170}) {

    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);
    const [isSolid, setIsSolid] = useState(false);

    const handleToggleIcon = () => {
        toggleFavourite(!isFavourite);
        setIsSolid(!isSolid);
    };

    const HeartIcon = isSolid ? SolidHeartIcon : OutlineHeartIcon;

  return (
    <View style={[styles.container, {height: cardHeight}]}>

        {/* Doctor Information */}
        <View style={styles.doctorCard}>
            {/* Image */}
            <Image source={doctor?.image} style={styles.image} />
            <View style={styles.doctorInfo}>
                <View style={styles.doctorNameContainer}>
                    {/* Doctor Name */}
                    <TextComponent style={styles.doctorName}>{doctor?.name}</TextComponent>
                    <HeartIcon style={styles.heartIcon} color='gray' />
                </View>

                {/* Specialist */}
                <TextComponent style={styles.specialist}>Specialist {doctor?.specialist}</TextComponent>

                <View style={styles.footerInfo}>
                    {/* Rating */}
                    <Text style={styles.rating}>{'⭐'.repeat(doctor?.rating)}</Text>

                    {/* Cost */}
                    <TextComponent style={styles.cost}>
                        <Text style={{color: 'rgba(14, 190, 127, 1)'}}>$ </Text>{doctor?.cost}
                    </TextComponent>
                </View>
            </View>
        </View>

        {/* Book Now Button */}
        <View style={styles.button}>
        {
          showBookNowButton && (
            <ButtonComponent
              title="Book Now"
              onPress={()=>{navigation.navigate('Appointment', {doctor: doctor} )}}
              width={140}
              height={32}
              borderRadius={4}
              backgroundColor='rgba(14, 190, 127, 1)'
              textSize={14}
            />

          )
        }
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 335,
    height: 170,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flexDirection: 'column',
    // marginBottom: 20,
    alignItems: 'center'
  },

  doctorCard: {
    flexDirection: 'row',
    marginTop: 18,
    marginLeft: 19,
    marginRight: 9,
  },

  image: {
    width: 92,
    height: 87,
    borderRadius: 8,
    
  },

  doctorInfo:{
    flexDirection: 'column',
    marginLeft: 12, 
    flex: 1, 
  },

  doctorNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Để căn chỉnh tên bác sĩ và icon trái tim
    alignItems: 'center', // Để căn chỉnh về cùng một hàng
  },

  heartIcon: {
    marginRight: 3, 
  },

  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 21.33,
    letterSpacing: -0.3,
    color: "rgba(51, 51, 51, 1)",
    marginBottom: 5,
  },

  specialistContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  specialist: {
    fontSize: 14,
    lineHeight: 16.59,
    letterSpacing: -0.3,
    color: 'rgba(103, 114, 148, 1)',
    marginBottom: 12
  },

  footerInfo:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  rating: {
    fontSize: 13,
    marginBottom: 3,
  },

  cost: {
    fontSize: 16,
    lineHeight: 18.96,
    letterSpacing: -0.3,
    color: 'rgba(51, 51, 51, 1)',
    marginRight: 3
  },

  button:{
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});
