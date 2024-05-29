import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import TextComponent from '../components/textComponent';
import HeaderComponent from '../components/headerComponent';
import {PlusIcon } from 'react-native-heroicons/outline';
import { PencilIcon } from 'react-native-heroicons/solid';
import ButtonComponent from '../components/buttonComponent';

import { useNavigation } from '@react-navigation/native';
import GradientCircle from '../components/gradientCircle';

const AddRecordsScreen = ({ }) => {
  const [name, setName] = useState('Abdullah Mamun');
  const [typeOfRecord, setTypeOfRecord] = useState('Prescription');
  const [recordDate, setRecordDate] = useState(new Date(2021, 1, 27)); // Month is 0-indexed
  const [showDatePicker, setShowDatePicker] = useState(false);

  const navigation = useNavigation();
  const patients = [
    { label: 'Myself', image: require('../assets/images/myself.png') },
    { label: 'Add', onPress: handleAddPatient },
  ];

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || recordDate;
    setShowDatePicker(false);
    setRecordDate(currentDate);
  };

  const handleAddPatient = () => {
    // Add patient functionality
  };

  return (
    <SafeAreaView style={styles.safeAreaStyle}>

        {/* Gradient Circle*/}
        <View style={styles.topGradientCircleContainer}>
            <GradientCircle size={216} colors={['rgba(135, 206, 235, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
        </View>
                
                
        <View style={styles.header}>
            <HeaderComponent title="Add Records" titleColor='rgba(51, 51, 51, 1)'/>
        </View>
        
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {patients.map((patient, index) => (
                    <TouchableOpacity
                    key={index}
                    style={[styles.patientCard, patient.label === 'Add' ? styles.addNewPatientCard : null]}
                    onPress={patient.onPress}
                    >
                    {patient.label === 'Add' ? (
                        <>
                        <PlusIcon size={40} strokeWidth={1.5} color='rgba(14, 190, 127, 1)' />
                        <Text style={styles.addNewPatientText}>Add More Images</Text>
                        </>
                    ) : (
                        <Image source={patient.image} style={styles.patientImage} />
                    )}
                    </TouchableOpacity>
                ))}
                </ScrollView>
            </View>
        
            <View style={styles.recordDetails}>
                <View style={styles.detailRow}>
                    <TextComponent style={styles.label}>Record for</TextComponent>
                    <PencilIcon size={20} color="rgba(103, 114, 148, 1)"/>
                </View>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
                
                <Text style={styles.label}>Type of record</Text>
                <View style={styles.recordTypeContainer}>
                    <TouchableOpacity style={styles.recordTypeButton} onPress={() => setTypeOfRecord('Report')}>
                        <Image source={require('../assets/images/report.png')} />
                        <Text style={[styles.recordTypeText, typeOfRecord === 'Report' && styles.recordTypeTextActive]}>Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.recordTypeButton} onPress={() => setTypeOfRecord('Prescription')}>
                        <Image source={require('../assets/images/prescription.png')} />
                        <Text style={[styles.recordTypeText, typeOfRecord === 'Prescription' && styles.recordTypeTextActive]}>Prescription</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.recordTypeButton} onPress={() => setTypeOfRecord('Invoice')}>
                        <Image source={require('../assets/images/report.png')} />
                        <Text style={[styles.recordTypeText, typeOfRecord === 'Invoice' && styles.recordTypeTextActive]}>Invoice</Text>
                    </TouchableOpacity>
                </View>
                
                <Text style={styles.label}>Record created on</Text>

                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <Text style={styles.dateText}>{recordDate.toDateString()}</Text>
                </TouchableOpacity>
                
                {showDatePicker && (
                    <DateTimePicker
                        value={recordDate}
                        mode="date"
                        display="default"
                        onChange={onChangeDate}
                    />
                )}

                <View style={styles.button}>
                    <ButtonComponent
                        title="Upload Record"
                        onPress={()=>{navigation.navigate('AllRecords')}}
                        width={295}
                        height={54}
                        borderRadius={6}
                        textSize={18}
                    />
                </View>
            </View>
        </View>
        
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
    },
    
    topGradientCircleContainer: {
        position: 'absolute',
        top: -32,
        left: -72,
    },

    header: {
        marginLeft: 20,
        marginTop: 36,
    },

    textHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 21.33,
        letterSpacing: -0.3,
        color: 'rgba(34, 34, 34, 1)',
        marginLeft: 19,
    },

    container:{
        justifyContent: 'space-between',
        flex: 1
    },
    
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },

    patientCard: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },

    addNewPatientCard: {
        width: 100, 
        height: 125,
        backgroundColor: 'rgba(14, 190, 127, 0.2)',
        borderRadius: 6,
    },

    patientImage: {
        width: 100,
        height: 125,
        borderRadius: 6,
    },

    addNewPatientText: {
        marginTop: 10,
        color: 'rgba(14, 190, 127, 1)',
    },

    recordDetails: {
        width: '100%',
        height: 453,
        paddingHorizontal: 19,
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        elevation: 5
    },

    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    
    label: {
        fontSize: 16,
        lineHeight: 18.96,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 1)'
    },

    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        paddingVertical: 10,
        marginBottom: 18,
    },

    recordTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        paddingVertical: 17,
        marginBottom: 20
    },

    recordTypeButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 8,
    },

    recordTypeText: {
        fontSize: 16,
        color: '#888',
    },

    recordTypeTextActive: {
        color: '#00a680',
    },
    
    dateText: {
        fontSize: 16,
        paddingVertical: 10,
        color: '#007bff',
    },

    button:{
        marginTop: 30,
        alignItems: 'center'

    }
});

export default AddRecordsScreen;
