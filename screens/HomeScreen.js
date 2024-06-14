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
import useFirestoreCollection from '../hooks/useFirestoreCollection'

var {width, height} = Dimensions.get('window')

export default function HomeScreen() {

    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');


    const dentistIcon = require('../assets/images/dentist.png'); 
    const heartIcon = require('../assets/images/heart.png'); 
    const eyeIcon = require('../assets/images/eye.png'); 
    const bodyIcon = require('../assets/images/body.png'); 

    const handleSearch = (text) => {
        // Xử lý tìm kiếm ở đây
        setSearchText(text);

    };

    const handleSubmitSearch = (text) => {
        navigation.navigate('Search', { query: text });
    };

    if (doctorsLoading) {
        return (
          <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Loading...</Text>
          </SafeAreaView>
        );
    }

    // Sử dụng custom hook để lấy dữ liệu từ Firestore
    const { data: doctors, loading: doctorsLoading } = useFirestoreCollection('doctors');

    const popularDoctors = doctors.filter(doctor => doctor.popular);
    const featureDoctors = doctors.filter(doctor => doctor.feature);

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
                            <TextComponent fontSize={20} fontWeight="400" lineHeight={23.7} color="rgba(250, 250, 250, 1)" style={{marginBottom: 6}}>Hi Handwerker!</TextComponent>
                            <TextComponent fontSize={25} fontWeight="700" lineHeight={29.63} color='rgba(255, 255, 255, 1)' >Find Your Doctor</TextComponent>
                        </View>
                        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={styles.image}>
                            <Image source={require('../assets/images/Ellipse26.png')}/>

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.bg}>
                    <View style={styles.topGradientCircleContainer}>
                        <GradientCircle size={216} colors={['rgba(135, 206, 235, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
                    </View>
                    
                    <View style={styles.bottomGradientCircleContainer}>
                        <GradientCircle size={242} colors={['rgba(14, 190, 126, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
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
                    <TextComponent fontSize={18} fontWeight='bold' lineHeight={21.33} color='rgba(51, 51, 51, 1)' style={{marginTop: 30}}>Live Doctors</TextComponent>

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

                <View style={styles.popularDoctor}>
                    <View style={styles.headline}>
                        <TextComponent fontSize={18} fontWeight='bold' lineHeight={21.33} color='rgba(51, 51, 51, 1)'>Popular Doctor</TextComponent>
                        <TouchableOpacity onPress={() => { navigation.navigate('PopularDoctor') }}>
                            <TextComponent fontSize={18} style={{ paddingRight: 22 }}>See all </TextComponent>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {popularDoctors.map((doctor, index) => (
                        <TouchableOpacity key={index} onPress={() => { navigation.navigate('DoctorDetail', { doctor: doctor }) }}>
                            <PopularDoctor
                                image={{ uri: doctor.image_url }}
                                name={doctor.name}
                                role={doctor.specialty}
                                rating={doctor.rating}
                            />
                        </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.featureDoctor}>
                    <View style={styles.headline}>
                        <TextComponent fontSize={18} fontWeight='bold' lineHeight={21.33} color='rgba(51, 51, 51, 1)'>Feature Doctor</TextComponent>
                        <TouchableOpacity>
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
    
    topGradientCircleContainer: {
        position: 'absolute',
        top: 148,
        left: -102,
    },

    bottomGradientCircleContainer: {
        position: 'absolute',
        bottom: -10,
        right: -55,
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

    image: {
        width: 60,
        height: 60,
        borderRadius: 25,
        marginLeft: 'auto',
    },

    section: {
        paddingLeft: 19,
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

    featureDoctor:{
        height: 195,
        paddingHorizontal: 19,
        marginBottom: 94,
        borderRadius: 6,
       
    },

})