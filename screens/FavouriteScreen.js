import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import TextComponent from '../components/textComponent'
import BackArrowIcon from '../assets/icon/backArrowIcon'
import { useNavigation } from '@react-navigation/native'
import SearchBar from '../components/searchBar'
import FavouriteCard from '../components/favouriteCard'
import FeatureDoctor from '../components/featureDoctor'
import HeaderComponent from '../components/headerComponent'
import GradientCircle from '../components/gradientCircle'
import useFirestoreCollection from '../hooks/useFirestoreCollection'

export default function FavouriteScreen() {

    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');

    if (doctorsLoading) {
        return (
          <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Loading...</Text>
          </SafeAreaView>
        );
    }

    // Sử dụng custom hook để lấy dữ liệu từ Firestore
    const { data: doctors, loading: doctorsLoading } = useFirestoreCollection('doctors');

    const featureDoctors = doctors.filter(doctor => doctor.feature);

    const favoriteDoctors = [
        { 
            id: 1, 
            name: 'Dr. Shouey', 
            specialist: 'Cardiology', 
            image_url: require('../assets/images/doctor1.png'),
            cost: '25.00',
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
            image_url: require('../assets/images/doctor2.png'),
            cost: '25.00',
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
            image_url: require('../assets/images/doctor1.png'),
            cost: '25.00',
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
            image_url: require('../assets/images/doctor2.png'),
            cost: '25.00',
            rating: 4,
            services: [
                { number: 1, description: 'Service 1 for Dr. Christenfeld N' },
                { number: 2, description: 'Service 2 for Dr. Christenfeld N' },
                { number: 3, description: 'Service 3 for Dr. Christenfeld N' },
            ]
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
    <SafeAreaView style={{flex: 1, paddingTop: 36}}>
        <View style={styles.bg}>
            <View style={styles.topGradientCircleContainer}>
                <GradientCircle size={216} colors={['rgba(135, 206, 235, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
            </View>
            
            <View style={styles.bottomGradientCircleContainer}>
                <GradientCircle size={257} colors={['rgba(14, 190, 126, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
            </View>
        </View>


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
                <HeaderComponent title="Favourite Doctor" titleColor='rgba(51, 51, 51, 1)' />
            </View>

            {/* Search Bar */}
            <View style={styles.searchBar}>
                <SearchBar
                    onChangeText={handleSearch}
                    onSubmit={handleSubmitSearch}
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
                    <TextComponent fontSize={18} fontWeight='bold' lineHeight={21.33} color='rgba(51, 51, 51, 1)'>Feature Doctor</TextComponent>
                    <TouchableOpacity onPress={() => { navigation.navigate('PopularDoctor') }}>
                        <TextComponent fontSize={14} color='rgba(103, 114, 148, 1)' style={{ paddingRight: 16 }}>See all </TextComponent>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {featureDoctors.map((doctor, index) => (
                    <TouchableOpacity key={index} onPress={() => { navigation.navigate('DoctorDetail', {doctor: doctor})}}>
                        <FeatureDoctor
                            image={{ uri: doctor.image_url }}
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
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    searchBar:{
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
    
    topGradientCircleContainer: {
        position: 'absolute',
        top: -33,
        left: -99,
    },

    bottomGradientCircleContainer: {
        position: 'absolute',
        bottom: -54,
        right: -70,
    },
})