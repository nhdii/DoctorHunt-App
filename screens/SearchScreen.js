import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from '../assets/icon/backArrowIcon'
import { useNavigation } from '@react-navigation/native'
import TextComponent from '../components/textComponent';
import SearchBar from '../components/searchBar';
import DoctorSearchCard from '../components/doctorSearchCard';
import GradientCircle from '../components/gradientCircle';

var {width, height} = Dimensions.get('window')

export default function SearchScreen() {
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

    const handleSubmitSearch = (text) => {
        navigation.navigate('Search', { query: text });
    };

    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <BackArrowIcon onPress={() => navigation.goBack()} />
                <TextComponent fontSize={18} fontWeight='400' lineHeight={21.33} color='rgba(34, 34, 34, 1)' style={{marginLeft: 19}}>
                    Find Doctors
                </TextComponent>
            </View>

            {/* Search Bar */}
            <View style={styles.searchBar}>
                <SearchBar
                    onChangeText={handleSearch}
                    onSubmit={handleSubmitSearch}
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

            <View style={styles.bg}>
                <View style={styles.elipse142Container}>
                    <GradientCircle size={216} colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0)']} color="rgba(97, 206, 255, 0.72)"/>
                </View>
                
                <View style={styles.elipse143Container}>
                    <GradientCircle size={216} colors={['rgba(255,255,255,0.1)', 'rgba(255, 255, 255, 1)']} color="#0ebe7e4d"/>
                </View>
            </View>
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
        width: width,
        height: height,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        zIndex: -1
      },
    
      elipse142Container:{
        width: 216,
        height: 216,
        top: -32,
        left: -72,
      },
    
      elipse143Container: {
        width: 216,
        height: 216,
        position: 'absolute',
        bottom: -63,
        right: -68,
      },
    

})