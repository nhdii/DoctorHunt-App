// SplashScreen.js

import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('OnBoarding01'); 
    }, 3000); // Thời gian chờ 3s

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <View style={styles.elipse142Container}>
          <LinearGradient 
            colors={['#61CEFF', '#FFFFFF' ]}

            style={styles.elipse142}
          />
        </View>

        <View style={styles.elipse143Container}>
          <LinearGradient 
            colors={['#0EBE7E4D', '#FFFFFF00' ]}
            start={{ x: 1, y: 0.5 }}
            end={{ x: 1, y: 1}}
            style={styles.elipse143}
          />
        </View>
        
        {/* <View style={styles.elipse143} /> */}
      </View>

        {/* View chứa logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoFrame}>
            <Image source={require('../assets/images/logo.png')} />
        </View>
        <Text style={styles.logoText}>Doctor Hunt</Text>
      </View>

    </View>
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
    // backgroundColor: 'linear-gradient(101.01deg, #0EBE7E 0.84%, #07D9AD 95.65%)',
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

  elipse142: {
    width: 216,
    height: 216,
    position: 'absolute',
    // top: -33,
    // left: -100,
    borderRadius: 108,   
  },

  elipse143Container: {
    width: 216,
    height: 216,
    position: 'absolute',
    top: 649,
    left: 202,
  },

  elipse143: {
    width: 216,
    height: 216,
    // top: 649,
    // left: 202,
    borderRadius: 108,
  },
});

export default SplashScreen;
