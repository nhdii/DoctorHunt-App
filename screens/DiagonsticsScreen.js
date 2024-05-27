import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import HeaderComponent from '../components/headerComponent';
import TextComponent from '../components/textComponent';
import DoctorTab from '../components/doctorTab';
import { useNavigation } from '@react-navigation/native';

const DiagnosticsTestsScreen = () => {

    const navigation = useNavigation();
    const homeIcon = require('../assets/images/homeIcon.png'); 
    const asociateIcon = require('../assets/images/asociate.png'); 
    const reportFeature = require('../assets/images/reportFeature.png'); 
    const followUp = require('../assets/images/follow-up.png'); 

    const handleBookNow = () =>{
        navigation.navigate('PatientScreen')
    }
  return (
    <ScrollView style={styles.container}>
      
        <HeaderComponent title="Diagonstics Tests"/>

        <TextComponent style={styles.title}>Get Full body health checkups from the comfort of your home.</TextComponent>
        
        <TextComponent style={styles.subtitle}>Upto 45% off + get 10% healthcash back</TextComponent>
        
        <View style={styles.features}>
            <TouchableOpacity style={styles.featureBox}>
                <DoctorTab icon={homeIcon} widthIcon={20} heightIcon={20} color="#2753F3" width={49.56} height={52.94} />
                <TextComponent style={styles.featureText}>Free home Sample pickup</TextComponent>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureBox}>
                <DoctorTab icon={asociateIcon} widthIcon={20} heightIcon={20} color="#FF484C" width={49.56} height={52.94} />
                <TextComponent style={styles.featureText}>Practo asociate labs</TextComponent>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureBox}>
                <DoctorTab icon={reportFeature} widthIcon={20} heightIcon={20} color="#FE7F44" width={49.56} height={52.94} />
                <TextComponent style={styles.featureText}>E-Reports in 24-72 hours</TextComponent>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureBox}>
                <DoctorTab icon={followUp} widthIcon={20} heightIcon={20} color="#0EBE7E" width={49.56} height={52.94} />
                <TextComponent style={styles.featureText}>Free follow-up with a doctor</TextComponent>
            </TouchableOpacity>
        </View>
        
        <TextComponent style={styles.recommendTitle}>Recommend for you</TextComponent>
        
        {testPackages.map((pkg, index) => (
            <View key={index} style={styles.package}>
                <View style={styles.packageHeadDetail}>
                    <TextComponent style={styles.packageTitle}>{pkg.title}</TextComponent>
                    <TextComponent style={styles.packageSubtitle}>{pkg.subtitle}</TextComponent>
                    <View style={styles.testsIncludedContainer}>
                        <TextComponent style={styles.testsIncluded}>{pkg.testsIncluded} tests included</TextComponent>
                    </View>
                </View>

                <Image source={{ uri: pkg.image }} style={styles.packageImage} />

                <View style={styles.packageFooterDetail}>
                    <View style={styles.packageFee}>
                        <TextComponent style={styles.packagePrice}>${pkg.price}  <TextComponent style={styles.discountPrice}>${pkg.discountPrice}</TextComponent>  <TextComponent style={styles.discount}> 35% off </TextComponent></TextComponent>
                        <TextComponent style={styles.cashback}>+ 10% Health cashback T&C</TextComponent>
                    </View>

                    <TouchableOpacity onPress={handleBookNow} style={styles.bookButton}>
                        <TextComponent style={styles.bookButtonText}>Book Now</TextComponent>
                    </TouchableOpacity>
                </View>
            </View>
        ))}
    </ScrollView>
  );
};

const testPackages = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Advanced Young Indian Health Checkup',
    subtitle: 'Ideal for individuals aged 21-40 years',
    testsIncluded: '69',
    price: '358',
    discountPrice: '330'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Working Women’s Health Checkup',
    subtitle: 'Ideal for individuals aged 21-40 years',
    testsIncluded: '119',
    price: '387',
    discountPrice: '345'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Active Professional Health Checkup',
    subtitle: 'Ideal for individuals aged 21-40 years',
    testsIncluded: '100',
    price: '457',
    discountPrice: '411'
  }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 36,
    },    

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 36.3,
        color: 'rgba(0, 0, 0, 1)',
        marginTop: -11,
        marginBottom: 7
    },

    subtitle: {
        color: 'rgba(14, 190, 127, 1)',
        marginBottom: 26
    },

    features: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20
    },

    featureBox: {
        width: '48%',
        height: 70,
        flexDirection: 'row',
        borderRadius: 8,
    },

    featureText: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 21.93,
        color: 'rgba(0, 0, 0, 1)',
        flexShrink: 1,
        flexWrap: 'wrap'
    },

    recommendTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 21.33,
        color: 'rgba(34, 34, 34, 1)',
        marginBottom: 10
    },
    package: {
        flexDirection: 'column',
        marginBottom: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 10
    },
  
    packageImage: {
        height: 220,
        borderRadius: 6,
        marginRight: 10
    },

    packageFooterDetail:{
        flexDirection: 'row',
    
    },

    packageHeadDetail: {
        flex: 1
    },

    packageTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 18.96,
        marginBottom: 6,
        color:'rgba(0, 0, 0, 1)'
    },

    packageSubtitle: {
        color: 'rgba(103, 114, 148, 1)',
        fontSize: 14,
        lineHeight: 16.59,
        marginBottom: 18
    },

    testsIncludedContainer:{
        width: 130,
        height: 32,
        borderRadius: 6,
        borderWidth: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(14, 190, 127, 1)',
        marginBottom: 18,
    },

    testsIncluded: {
        fontSize: 12,
        lineHeight: 14.22,
        color: 'rgba(14, 190, 127, 1)',     
    },

    packageFee:{
        flex: 3,
        flexDirection: 'column',
        marginLeft: 19,
        marginTop: 11
    },

    packagePrice: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 29.83
    },

    discountPrice: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 23.2
    },

    discount:{
        fontSize: 14,
        lineHeight: 23.2,
        color: 'rgba(14, 190, 127, 1)'
    },

    cashback: {
        fontSize: 14,
        lineHeight: 23.2,
        color: 'rgba(103, 114, 148, 1)',
        marginBottom: 23
    },

    bookButton: {
        flex: 1.5,
        height: 32,
        marginTop: 20,
        marginRight: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(14, 190, 127, 1)',
        borderRadius: 6
    },

    bookButtonText: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 12,
        lineHeight: 14.22,
        textAlign: 'center',
    }
});

export default DiagnosticsTestsScreen;
