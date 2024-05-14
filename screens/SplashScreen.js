// SplashScreen.js

import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientCircle from '../components/gradientCircle';

const SplashScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('OnBoarding01'); 
    }, 3000); // Thời gian chờ 3s

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
          animated={true}
          backgroundColor='transparent'
          translucent={true}
      />
      
      <View style={styles.bg}>
        <View style={styles.elipse142Container}>
          <GradientCircle size={216} colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0)']} color="rgba(97, 206, 255, 0.72)"/>
        </View>
        
        <View style={styles.elipse143Container}>
          <GradientCircle size={216} colors={['rgba(255,255,255,0.1)', 'rgba(255, 255, 255, 1)']} color="#0ebe7e4d"/>
        </View>
      </View>

      <View style={styles.logoContainer}>
        <View style={styles.logoFrame}>
            <Image source={require('../assets/images/logo.png')} />
        </View>
        <Text style={styles.logoText}>Doctor Hunt</Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  logoContainer: {
    alignItems: 'center',
  },

  logoFrame: {
    width: 70,
    height: 70,
  },

  logoText: {
    fontFamily: 'Rubik',
    color: '#222222',
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 29.63,
    letterSpacing: -0.3,
    textAlign: 'center',
    marginTop: 10, // Adjust as needed
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
    width: 216,
    height: 216,
    top: -33,
    left: -100,
  },

  elipse143Container: {
    width: 216,
    height: 216,
    position: 'absolute',
    bottom: -53,
    left: 202,
  },

});

export default SplashScreen;
