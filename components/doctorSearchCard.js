import { StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import TextComponent from './textComponent'
import { HeartIcon as OutlineHeartIcon } from 'react-native-heroicons/outline'
import { HeartIcon as SolidHeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

var {width, height} = Dimensions.get('window')

export default function DoctorSearchCard({doctorInfo, onPress}) {

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
                    <View style={styles.textContainer}>
                        <TextComponent style={styles.statusText}>
                            {doctorInfo.status}
                        </TextComponent>

                        <TextComponent style={styles.timeText}>
                            {doctorInfo.availability}
                        </TextComponent>
                    </View>
                </View>
            )
        }

        {
            doctorInfo && (
                <View style={styles.rightColumn}>
                    <View style={styles.infoContainer}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <TextComponent style={styles.nameStyle}>
                                {doctorInfo.name}
                            </TextComponent>

                            <TouchableOpacity onPress={handleToggleIcon} >
                                <HeartIcon color={isFavourite ? 'red' : "rgba(103, 114, 148, 1)"}/>
                            </TouchableOpacity>
                        </View>

                        <TextComponent style={styles.roleStyle}>
                            {doctorInfo.role}
                        </TextComponent>

                        <TextComponent style={styles.expStyle}>
                            {doctorInfo.experience}
                        </TextComponent>

                        <View style={styles.patientStyle}>
                            <View style={styles.percent}>
                                <View style={styles.ellipse} />
                                <TextComponent style={styles.percentText}>
                                    {doctorInfo.percent}
                                </TextComponent>
                            </View>

                            <View style={styles.patient}>
                                <View style={styles.ellipse} />
                                <TextComponent style={styles.percentText}>
                                    {doctorInfo.patient}
                                </TextComponent>
                            </View>
                        </View>

                        
                    </View>

                    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
                        <TextComponent style={styles.textButton}>
                            Book Now
                        </TextComponent>
                    </TouchableOpacity>
                </View>
            )
        }

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: 335,
        height: 170,
        flexDirection: 'row',
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },

    leftColumn:{
        flexDirection: 'column',
        marginLeft: 20,
    },

    textContainer: {
        marginTop: 'auto',
        flexDirection: 'column',
        marginBottom: 14
    },

    statusText: {
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 15.41,
        letterSpacing: -0.3,
        color: 'rgba(14, 190, 127, 1)'
    },

    timeText: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14.22,
        letterSpacing: -0.3,
        color: 'rgba(103, 114, 148, 1)'
    },

    image:{
        marginTop: 18,
    },

    rightColumn:{
        flex: 1,
        flexDirection: 'column',
        marginRight: 17,
        borderRadius: 8
    },

    infoContainer:{
        width: 192,
        height: 80,
        marginTop: 22,
        marginLeft: 2
    },

    nameStyle:{
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 21.33,
        letterSpacing: -0.3,
        color: 'rgba(51, 51, 51, 1)'
    },

    roleStyle:{
        marginTop: 1,
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 16.82,
        letterSpacing: -0.3,
        color: 'rgba(14, 190, 127, 1)'
    },

    expStyle:{
        marginTop: 4,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14.22,
        letterSpacing: -0.3,
        color: 'rgba(103, 114, 148, 1)'
    },

    patientStyle: {
        marginTop: 10,
        flexDirection: 'row',
        width: 149,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    percent:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    ellipse: {
        width: 10, 
        height: 10,
        borderRadius: 10,
        marginRight: 4,
        backgroundColor: 'rgba(14, 190, 127, 1)'
    },

    percentText:{
        fontSize: 11,
        fontWeight: '300',
        lineHeight: 13.04,
        letterSpacing: -0.3,
        color: 'rgba(103, 114, 148, 1)'
    },

    patient:{
        marginLeft: 17,
        flexDirection: 'row',
        alignItems: 'center',
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
        marginLeft: 175,
        position: 'absolute',

    },

    icon: {
        width: 19, 
        height: 17
    }

})