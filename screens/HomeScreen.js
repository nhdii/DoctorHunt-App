import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, StatusBar, Dimensions } from 'react-native'
import React, { useState } from 'react'
import GradientCircle from '../components/gradientCircle'
import LinearGradient from 'react-native-linear-gradient'
import TextComponent from '../components/textComponent'
import DoctorTab from '../components/doctorTab'
import PopularDoctor from '../components/popularDoctor'
import FeatureDoctor from '../components/featureDoctor'
import SearchBar from '../components/searchBar'
import { DrawerActions, useNavigation } from '@react-navigation/native'

var {width, height} = Dimensions.get('window')

export default function HomeScreen() {

    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');


    const dentistIcon = require('../assets/images/dentist.png'); 
    const heartIcon = require('../assets/images/heart.png'); 
    const eyeIcon = require('../assets/images/eye.png'); 
    const bodyIcon = require('../assets/images/body.png'); 

    const doctorData = [
        {
            image: require('../assets/images/doctor1.png'),
            name: 'Dr. Fillerup Grab',
            role: 'Medicine Specialist',
            rating: 4, // Example rating
        },

        {
            image: require('../assets/images/doctor2.png'),
            name: 'Dr. Blessing',
            role: 'Dentist Specialist',
            rating: 4, // Example rating
        },
        // Add more doctor data here
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

    const handleSubmitSearch = (text) => {
        navigation.navigate('Search', { query: text });
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
                <View style={styles.headerContainer}>
                    <LinearGradient colors={['rgba(14, 190, 126, 1)', 'rgba(7, 217, 173, 1)']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.rectangle} />
                    <View style={styles.groupContainer}>
                        <View style={styles.text}>
                            <Text style={styles.greetingText}>Hi Handwerker!</Text>
                            <Text style={styles.titleText}>Find Your Doctor</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={styles.image}>
                            <Image source={require('../assets/images/Ellipse26.png')}/>

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.bg}>
                    <View style={styles.elipse142Container}>
                        <GradientCircle size={216} colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0)']} color="rgba(97, 206, 255, 0.72)"/>
                    </View>
                    
                    <View style={styles.elipse143Container}>
                        <GradientCircle size={216} colors={['rgba(255,255,255,0.1)', 'rgba(255, 255, 255, 1)']} color="#0ebe7e4d"/>
                    </View>
                </View>

                {/* search bar */}
                <View style={styles.searchBar}>
                    <SearchBar
                        onChangeText={handleSearch}
                        onSubmit={handleSubmitSearch}
                    />
                </View>
                
                <View style={styles.section}>
                    <TextComponent style={styles.sectionTitle}>Live Doctors</TextComponent>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {/* Render list of live doctors here */}
                        {/* Example */}
                        <TouchableOpacity onPress={()=>{navigation.navigate('LiveStream')}} style={styles.doctorCard}>
                            <Image source={require('../assets/images/doctor_lives_1.png')} style={styles.doctorAvatar} />
                        </TouchableOpacity>

                        <View style={styles.doctorCard}>
                            <Image source={require('../assets/images/doctor_lives_1.png')} style={styles.doctorAvatar} />
                        </View>

                        <View style={styles.doctorCard}>
                            <Image source={require('../assets/images/doctor_lives_1.png')} style={styles.doctorAvatar} />
                        </View>

                        <View style={styles.doctorCard}>
                            <Image source={require('../assets/images/doctor_lives_1.png')} style={styles.doctorAvatar} />
                        </View>
                    {/* Repeat for other doctors */}
                    </ScrollView>
                </View>

                {/* Doctor tab  */}
                <View style={styles.doctorTab}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity>
                            <DoctorTab icon={dentistIcon} widthIcon={33} heightIcon={37.3} color="#2753F3" width={80} height={90} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <DoctorTab icon={heartIcon} widthIcon={33} heightIcon={37.3} color="#0EBE7E" width={80} height={90}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <DoctorTab icon={eyeIcon} widthIcon={33} heightIcon={37.3} color="#FE7F44" width={80} height={90}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <DoctorTab icon={bodyIcon} widthIcon={33} heightIcon={37.3} color="#FF484C" width={80} height={90}/>
                        </TouchableOpacity>

                    </ScrollView>
                </View>

                {/* popular Doctor */}
                <View style={styles.popularDoctor}>
                    <View style={styles.headline}>
                        <TextComponent style={styles.title}>Popular Doctor</TextComponent>

                        <TouchableOpacity>
                            <Text style={{fontSize: 18, paddingRight: 22}}>See all </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {doctorData.map((doctor, index) => (
                            <TouchableOpacity 
                                key={index}
                                onPress={()=> {}}
                            >
                                <PopularDoctor
                                    image={doctor.image}
                                    name={doctor.name}
                                    role={doctor.role}
                                    rating={doctor.rating}
                                />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

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

    headerContainer: {
        position: 'absolute',
    },

    rectangle:{
        position: 'absolute',
        width: width,
        height: 156,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
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
        top: 148,
        left: -102,
        zIndex: -1
    },

    elipse143Container: {
        width: 216,
        height: 216,
        position: 'absolute',
        bottom: -53,
        left: 202,
    },

    searchBar: {
        marginLeft: 20,
        marginTop: 126,
    },

    groupContainer:{
        position: 'absolute',
        flexDirection: 'row',
        width: width,
        height: 63,
        marginTop: 36,
        paddingLeft: 19,
        paddingRight: 20,
    },

    text: {
        marginTop: 8
    },

    greetingText: {
        height: 22, 
        fontFamily: 'Rubik',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 23.7, 
        letterSpacing: -0.3,
        color: 'rgba(250, 250, 250, 1)'
    },

    titleText: {
        paddingTop: 6,
        fontFamily: 'Rubik',
        fontWeight: '700',
        fontSize: 25,
        lineHeight: 29.63, 
        letterSpacing: -0.3,
        color: 'rgba(255, 255, 255, 1)'
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 25,
        marginLeft: 'auto',
    },

    section: {
        paddingLeft: 19,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 21.33,
        paddingTop: 30,
        color: 'rgba(51, 51, 51, 1)'
    },

    doctorCard: {
        width: 116.48,
        height: 168,
        marginTop: 20,
        marginRight: 14.52,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 6,
        elevation: 5
    },

    doctorTab:{
        height: 119,
        marginTop: 30,
        borderRadius: 8,
        paddingLeft: 20,
        paddingRight: 20
    },

    popularDoctor:{
        height: 337,
        paddingLeft: 19,
        marginBottom: 31,
    },

    headline:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    title:{
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 21.33,
        letterSpacing: -0.3,
        color: 'rgba(51, 51, 51, 1)'    
    },

    featureDoctor:{
        height: 195,
        paddingHorizontal: 19,
        marginBottom: 94,
        borderRadius: 6,
       
    },

})