import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import TextComponent from '../components/textComponent'
import BackArrowIcon from '../assets/icon/backArrowIcon'
import { useNavigation } from '@react-navigation/native'
import SearchBar from '../components/searchBar'
import FavouriteCard from '../components/favouriteCard'
import FeatureDoctor from '../components/featureDoctor'

export default function FavouriteScreen() {

    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');

    const favoriteDoctors = [
        { 
            id: 1, 
            name: 'Dr. Shouey', 
            specialist: 'Cardiology', 
            image: require('../assets/images/doctor1.png'),
            cost: '25.00/hours',
            rating: 4,
            services: [
                { number: 1, description: 'Service 1 for Dr. Shouey' },
                { number: 2, description: 'Service 2 for Dr. Shouey' },
                { number: 3, description: 'Service 3 for Dr. Shouey' },
            ]
        },

        { 
            id: 2, 
            name: 'Dr. Christenfeld N', 
            specialist: 'Cancer', 
            image: require('../assets/images/doctor2.png'),
            cost: '25.00/hours',
            rating: 4,
            services: [
                { number: 1, description: 'Service 1 for Dr. Christenfeld N' },
                { number: 2, description: 'Service 2 for Dr. Christenfeld N' },
                { number: 3, description: 'Service 3 for Dr. Christenfeld N' },
            ]
        },

        { 
            id: 3, 
            name: 'Dr. Shouey', 
            specialist: 'Cardiology', 
            image: require('../assets/images/doctor1.png'),
            cost: '25.00/hours',
            rating: 4, 
            services: [
                { number: 1, description: 'Service 1 for Dr. Christenfeld N' },
                { number: 2, description: 'Service 2 for Dr. Christenfeld N' },
                { number: 3, description: 'Service 3 for Dr. Christenfeld N' },
            ]
        },

        { 
            id: 4, 
            name: 'Dr. Christenfeld N', 
            specialist: 'Cancer', 
            image: require('../assets/images/doctor2.png'),
            cost: '25.00/hours',
            rating: 4,
            services: [
                { number: 1, description: 'Service 1 for Dr. Christenfeld N' },
                { number: 2, description: 'Service 2 for Dr. Christenfeld N' },
                { number: 3, description: 'Service 3 for Dr. Christenfeld N' },
            ]
        },
        
    ];

    const featureDoctor = [
        {
            image: require('../assets/images/feature1.png'),
            name: 'Dr. Crick',
            cost: '25.00/hours',
            rating: 4, // Example rating
        },

        {
            image: require('../assets/images/feature2.png'),
            name: 'Dr. Strain',
            cost: '22.00/hours',
            rating: '3.7', // Example rating
        },
        
        {
            image: require('../assets/images/feature3.png'),
            name: 'Dr. Lachinet',
            cost: '29.00/hours',
            rating: '3.0', // Example rating
        },

        {
            image: require('../assets/images/feature1.png'),
            name: 'Dr. Lachinet',
            cost: '29.00/hours',
            rating: '2.9', // Example rating
        },
    ];

    const handleSearch = (text) => {
        // Xử lý tìm kiếm ở đây
        setSearchText(text);

    };

  return (
    <SafeAreaView style={{flex: 1}}>
        <LinearGradient 
            colors={['rgba(14, 190, 126, 1)', 'rgba(7, 217, 173, 1)']} 
            start={{x: 0, y: 0}} 
            end={{x: 1, y: 1}}
        >
            <StatusBar
                animated={true}
                backgroundColor='transparent'
                translucent={true}
            />
        </LinearGradient>

        <ScrollView>
            {/* Header */}
            <View style={styles.header}>
                <BackArrowIcon onPress={() => navigation.goBack()} />
                <TextComponent style={styles.textHeader}>
                    Favourtie Doctors
                </TextComponent>
            </View>

            {/* Search Bar */}
            <View style={styles.searchBar}>
                <SearchBar
                    onChangeText={handleSearch}
                />
            </View>

            {/* Favorite Doctors */}
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {favoriteDoctors.map(doctor => (
                    <TouchableOpacity 
                        onPress={()=>{navigation.navigate("DoctorDetail", { doctor: doctor, services: doctor.services  })}}
                        key={doctor.id}
                    >
                        <FavouriteCard doctor={doctor} />
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* feature Doctor */}
            <View style={styles.featureDoctor}>
                <View style={styles.headline}>
                    <TextComponent style={styles.title}>Feature Doctor</TextComponent>

                    <TouchableOpacity>
                        <Text style={{fontSize: 14, paddingRight: 16, color: 'rgba(103, 114, 148, 1)'  }}>See all </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {featureDoctor.map((doctor, index) => (
                        <TouchableOpacity 
                            key={index}
                            onPress={()=> {}}
                        >
                            <FeatureDoctor
                                image={doctor.image}
                                name={doctor.name}
                                cost={doctor.cost}
                                rating={doctor.rating}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    header:{
        flexDirection: 'row',
        marginTop: 36,
        marginLeft: 20,
        alignItems: 'center'
    },

    textHeader:{
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

    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 10,
        paddingTop: 20,
        justifyContent: 'center',
    },

    featureDoctor:{
        marginTop: 29,
        paddingHorizontal: 19,
        marginBottom: 94,
        borderRadius: 6,
       
    },

    headline:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 21.33,
        letterSpacing: -0.3,
        color: 'rgba(51, 51, 51, 1)'    
    },
})