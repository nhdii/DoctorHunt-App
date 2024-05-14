import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import BackArrowIcon from '../assets/icon/backArrowIcon';
import TextComponent from '../components/textComponent';
import DoctorDetailCard from '../components/doctorDetailCard';
import { PlusIcon } from 'react-native-heroicons/outline';
import ButtonComponent from '../components/buttonComponent';
import GradientCircle from '../components/gradientCircle';

export default function AppointmentScreen({route}) {
    
    const navigation = useNavigation();
    const { doctor  } = route.params;

    const [patientName, setPatientName] = useState();
    const [contactNumber, setContactNumber] = useState();

    const handleAddPatient = () => {
        // Your logic to add a new patient goes here
        // For example, you might open a modal or navigate to another screen for adding a new patient
    };

    // Array containing information about each patient
    const patients = [
        { label: 'Add', onPress: handleAddPatient },
        { label: 'Myself', image: require('../assets/images/myself.png') },
        { label: 'My Child', image: require('../assets/images/mychild.png') },
        { label: 'My Parent', image: require('../assets/images/mychild.png') },
    ];

  return (
    <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
            <BackArrowIcon onPress={()=> navigation.goBack()} />
            <TextComponent style={styles.textHeader}>Appointment</TextComponent>
        </View>

        <View style={styles.bg}>
            <View style={styles.elipse142Container}>
            <GradientCircle size={216} colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0)']} color="rgba(97, 206, 255, 0.72)"/>
            </View>
            
            <View style={styles.elipse143Container}>
            <GradientCircle size={216} colors={['rgba(255,255,255,0.1)', 'rgba(255, 255, 255, 1)']} color="#0ebe7e4d"/>
            </View>
        </View>

        <View style={styles.container}>
            {/* Doctor Card */}
            <DoctorDetailCard style={styles.doctorCard} doctor={doctor} showBookNowButton={false} cardHeight={123} />

            <View style={styles.appointmentForm}>
                <TextComponent style={styles.formTitle}>
                    Appointment For
                </TextComponent>

                <TextInput 
                    style={styles.inputName}
                    onChangeText={setPatientName}
                    value={patientName}    
                    placeholder='Patient Name'
                />

                <TextInput 
                    style={styles.inputNumber}
                    onChangeText={setContactNumber}
                    value={contactNumber}  
                    placeholder='Contact Number'
                    keyboardType='numeric'
                /> 
            </View>
            
            <View horizontal style={styles.choosePatientStyle}>
                <TextComponent style={styles.choosePatientTitle}>
                    Who is this Patient?
                </TextComponent>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {/* Render patient cards using map */}
                    {patients.map((patient, index) => (
                        <TouchableOpacity 
                            key={index}
                            style={[styles.patientCard, patient.label === 'Add' ? styles.addNewPatientCard : null]}
                            onPress={patient.onPress}
                        >
                            {patient.label === 'Add' ? (
                                <>
                                    <PlusIcon size={40} strokeWidth={1.5} color='rgba(14, 190, 127, 1)' />
                                    <Text style={styles.addNewPatientText}>{patient.label}</Text>
                                    
                                </>
                            ) : (
                                <>
                                    <Image source={patient.image} style={styles.patientImage} />
                                    <TextComponent style={styles.patientLabel}>{patient.label}</TextComponent>
                                </>
                            )}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.button}>
                <ButtonComponent
                    title="Next"
                    onPress={()=>{navigation.navigate('AppointmentSelectTime', {doctor: doctor})}}
                    width={295}
                    height={54}
                    borderRadius={6}
                    textSize={18}
                />
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 36,
        // alignItems: 'center'
    },

    container:{
        alignItems: 'center',
        // flexDirection: 'column'
    },

    bg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    
    elipse142Container:{
        position: 'absolute',
        width: 216,
        height: 216,
        top: -33,
        left: -102,
        zIndex: -1
    },

    elipse143Container: {
        width: 216,
        height: 216,
        position: 'absolute',
        bottom: -82,
        left: 202,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 34,

    },

    textHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 21.33,
        letterSpacing: -0.3,
        color: 'rgba(34, 34, 34, 1)',
        marginLeft: 19
    },

    doctorCard:{
        marginTop: 34,
        elevation: 5
    },

    appointmentForm:{
        width: 335,
        height: 165,
        marginTop: 30,
    },

    formTitle:{
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 18.96,
        letterSpacing: -0.3,
        color: 'rgba(51, 51, 51, 1)'
    },

    inputName:{
        height: 54,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'rgba(118, 128, 159, 0.12)',
        padding: 19,
    },

    inputNumber:{
        height: 54,
        marginTop: 18,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(118, 128, 159, 0.12)',
        padding: 19,
    },

    choosePatientStyle:{
        width: '100%',
        height: 188,
        marginTop: 30,
        
    },

    choosePatientTitle:{
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 18.96,
        letterSpacing: -0.3,
        color: 'rgba(51, 51, 51, 1)'
    },

    patientCard: {
        marginTop: 20,
        width: 100,
        height: 149,
        marginRight: 10,
        borderRadius: 6,
    },

    addNewPatientCard: {
        height: 125,
        backgroundColor: 'rgba(14, 190, 127, 0.2)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    addNewPatientText: {
        color: 'rgba(14, 190, 127, 1)',
        marginBottom: 5,
    },

    patientLabel:{
        textAlign: 'center'
    },

    button:{
        marginTop: 18
    }
})