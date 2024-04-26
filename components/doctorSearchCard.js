import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import TextComponent from './textComponent'

export default function DoctorSearchCard() {
  return (
    <View style={styles.container}>
        <View style={styles.leftColumn}>
            <Image source={require('../assets/images/doctorSearch.png')} style={styles.image} />
            <View style={styles.textContainer}>
                <TextComponent style={styles.statusText}>
                    Next Available
                </TextComponent>

                <TextComponent style={styles.timeText}>
                    10:00 AM tomorrow
                </TextComponent>
            </View>
        </View>

        <View style={styles.rightColumn}>
            <View style={styles.infoContainer}>
                <TextComponent style={styles.nameStyle}>
                    Dr. Shruti Kedia
                </TextComponent>

                <TextComponent style={styles.roleStyle}>
                    Tooths Dentist
                </TextComponent>

                <TextComponent style={styles.expStyle}>
                    7 Years experience 
                </TextComponent>

                <View style={styles.patientStyle}>
                    <View style={styles.percent}>
                        <View style={styles.ellipse} />
                        <TextComponent style={styles.percentText}>
                            87%
                        </TextComponent>
                    </View>

                    <View style={styles.patient}>
                        <View style={styles.ellipse} />
                        <TextComponent style={styles.percentText}>
                            69 Patient Stories
                        </TextComponent>
                    </View>
                </View>
            </View>

            <View >

            </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: 335,
        height: 170,
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
        flexDirection: 'column',
        // backgroundColor: 'gray'
    },

    infoContainer:{
        width: 192,
        height: 80,
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

})