// screens/PopularDoctorsScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import PopularDoctor from '../components/popularDoctor';
import CategoryDoctorCard from '../components/categoryCard';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import BackArrowIcon from '../assets/icon/backArrowIcon';


export default function PopularDoctorsScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <BackArrowIcon onPress={() => navigation.goBack()} />

                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <MagnifyingGlassIcon size={24} color='rgba(103, 114, 148, 1)'/>
                </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Popular Doctor</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                <PopularDoctor image={require('../assets/images/doctor1.png')} name="Dr. Truluck Nik" specialty="Medicine Specialist" rating={5} />
                <PopularDoctor image={require('../assets/images/doctor1.png')} name="Dr. Tranquilli" specialty="Pathology Specialist" rating={4} />
                {/* Add more PopularDoctorCard components here */}
            </ScrollView>

            <Text style={styles.sectionTitle}>Category</Text>
            <CategoryDoctorCard imageSource={require('../assets/images/doctor1.png')} name="Dr. Pediatrician" specialty="Specialist Cardiologist" rating={2.4} views={2475} isFavorite={true} />
            <CategoryDoctorCard imageSource={require('../assets/images/doctor1.png')} name="Dr. Mistry Brick" specialty="Specialist Dentist" rating={2.8} views={2893} isFavorite={false} />
            <CategoryDoctorCard imageSource={require('../assets/images/doctor1.png')} name="Dr. Ether Wall" specialty="Specialist Cancer" rating={2.7} views={2754} isFavorite={true} />
            {/* Add more CategoryDoctorCard components here */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    backButton: {
        fontSize: 24,
        color: '#333',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchButton: {
        fontSize: 24,
        color: '#333',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    horizontalScroll: {
        flexDirection: 'row',
        marginVertical: 10,
    },
});
