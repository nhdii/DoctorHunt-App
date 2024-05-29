import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from '../assets/icon/backArrowIcon'
import { useNavigation } from '@react-navigation/native'
import TextComponent from '../components/textComponent';
import SearchBar from '../components/searchBar';
import DoctorSearchCard from '../components/doctorSearchCard';
import GradientCircle from '../components/gradientCircle';

var {width, height} = Dimensions.get('window')

export default function MyDoctorScreen() {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');

    const doctors = [
        { 
            name: "Dr. Shruti Kedia",
            role: "Tooths Dentist",
            experience: "7 Years experience",
            status: "Next Available",
            availability: "10:00 AM tomorrow",
            image: require('../assets/images/doctorSearch.png'),
            percent: '87%',
            patient: '67 Patient Stories',
            address: "Upasana Dental Clinic, salt lake",
            rating: 4
        },
        
        { 
            name: "Dr. Watamaniuk",
            role: "Tooths Dentist",
            experience: "9 Years experience",
            status: "Next Available",
            availability: "12:00 AM tomorrow",
            image: require('../assets/images/doctorSearch.png'),
            percent: '74%',
            patient: '78 Patient Stories',
            address: "Upasana Dental Clinic, salt lake",
            rating: 3
        },
    ];    

    const handleSearch = (text) => {
        // Xử lý tìm kiếm ở đây
        setSearchText(text);

    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Gradient Circle */}
            <View style={styles.bg}>
                <View style={styles.topGradientCircleContainer}>
                    <GradientCircle size={216} colors={['rgba(135, 206, 235, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
                </View>
                
                <View style={styles.bottomGradientCircleContainer}>
                    <GradientCircle size={257} colors={['rgba(14, 190, 126, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
                </View>
            </View>

            {/* Header */}
            <View style={styles.header}>
                <BackArrowIcon onPress={() => navigation.goBack()} />
                <TextComponent style={styles.textHeader}>
                    My Doctors
                </TextComponent>
            </View>

            {/* Search Bar */}
            <View style={styles.searchBar}>
                <SearchBar
                    onChangeText={handleSearch}
                />
            </View>

            <ScrollView style={styles.listCard}>
                {doctors.map((doctor, index) => (
                    <DoctorSearchCard
                        key={index}
                        doctorInfo={doctor}
                        onPress={() => navigation.navigate('SelectTime', { doctorInfo: doctor })}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        width: width,
        flex: 1,
        paddingTop: 36,
    },

    header:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 9,
        paddingHorizontal: 20
    },

    textHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 21.33,
        letterSpacing: -0.3,
        color: 'rgba(34, 34, 34, 1)',
        marginLeft: 19,
    },

    searchBar:{
        marginTop: 36,
        alignItems: 'center'
    },

    listCard:{
        marginTop: 24,
        marginHorizontal: 30
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
        zIndex: -10
    },
    
    topGradientCircleContainer: {
        position: 'absolute',
        top: -32,
        left: -72,
    },

    bottomGradientCircleContainer: {
        position: 'absolute',
        bottom: -90,
        right: -70,
    },

})