import { StyleSheet, View, Image, TouchableOpacity, Dimensions, Text } from 'react-native'
import React, { useState } from 'react'
import TextComponent from './textComponent'
import { HeartIcon as OutlineHeartIcon } from 'react-native-heroicons/outline'
import { HeartIcon as SolidHeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

var {width, height} = Dimensions.get('window')

export default function DoctorSelectCard({doctorInfo}) {

    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);
    const [isSolid, setIsSolid] = useState(false);

    const handleToggleIcon = () => {
        toggleFavourite(!isFavourite);
        setIsSolid(!isSolid);
    };

    const HeartIcon = isSolid ? SolidHeartIcon : OutlineHeartIcon;

  return (
    <View style={styles.container}>
        {
            doctorInfo && (
                <View style={styles.leftColumn}>
                    <Image source={require('../assets/images/doctorSearch.png')} style={styles.image} />
                </View>
            )
        }

        {
            doctorInfo && (
                <View style={styles.rightColumn}>
                    <View style={styles.infoContainer}>
                        <TextComponent style={styles.nameStyle}>
                            {doctorInfo.name}
                        </TextComponent>

                        <TextComponent style={styles.addcressStyle}>
                            {doctorInfo.address}
                        </TextComponent>

                        <View style={styles.rowRatingCost}>
                            <TextComponent style={styles.ratingStyle}>
                                {/* {doctorInfo.rating} */}
                                {'⭐'.repeat(doctorInfo.rating)}
                            </TextComponent>

                            <TextComponent style={styles.costStyle}>
                                {doctorInfo?.cost}
                            </TextComponent>
                        </View>

                        <TouchableOpacity onPress={handleToggleIcon} style={styles.favoriteIcon} >
                            <HeartIcon color={isFavourite ? 'red' : "rgba(103, 114, 148, 1)"} style={styles.icon} />
                        </TouchableOpacity>
                    </View>

                </View>
            )
        }

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: 335,
        height: 88,
        flexDirection: 'row',
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },

    leftColumn:{
        flexDirection: 'column',
        marginLeft: 10,
    },

    image:{
        width: 71,
        height: 68.09,
        borderRadius: 4,
        marginTop: 10,
    },

    rightColumn:{
        flex: 1,
        flexDirection: 'column',
        marginLeft: 8,
        borderRadius: 8,
    },

    infoContainer:{
        marginTop: 20,
        marginLeft: 2
    },

    nameStyle:{
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 18.96,
        letterSpacing: -0.3,
        color: 'rgba(51, 51, 51, 1)'
    },

    addcressStyle:{
        marginTop: 1,
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 16.82,
        letterSpacing: -0.3,
        color: 'rgba(103, 114, 148, 1)'
    },

    rowRatingCost:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    ratingStyle:{
        marginTop: 4,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14.22,
        letterSpacing: -0.3,
        color: 'rgba(103, 114, 148, 1)'
    },

    costStyle:{
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14.22,
        letterSpacing: -0.3,
        color: 'rgba(103, 114, 148, 1)'
    },

    buttonContainer:{
        width: 112,
        height: 34,
        borderRadius: 4,
        marginTop: 17,
        marginLeft: 87,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(14, 190, 127, 1)"
    },

    favoriteIcon:{
        marginLeft: 206,
        position: 'absolute',

    },

    icon: {
        width: 19, 
        height: 17
    }

})