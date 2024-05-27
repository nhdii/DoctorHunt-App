import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const DoctorTab = ({ icon, widthIcon, heightIcon, color, width, height }) => {
  return (
    <View style={styles.container}>
        {/* Background Ellipses */}
        <View style={[styles.ellipseContainer, { backgroundColor: color, width: width, height: height }]}>
            <View style={styles.ellipse149}></View>
            <View style={styles.ellipse148}></View>

            {/* Icon */}
            <View style={[styles.iconContainer, {width: widthIcon, height: heightIcon}]}>
                <Image source={icon} style={styles.icon} />
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 119,
    borderRadius: 8,
    paddingRight: 12,
},

  iconContainer: {
    position: 'absolute',
    width: 33,
    height: 37.3,

  },

  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Adjust as needed
  },

  ellipseContainer: {
    width: 80,
    height: 90,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ellipse148: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
},
  
  ellipse149: {
    width: 67,
    height: 67,
    top: 30,
    left: 46,
    borderRadius: 33.5,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    // backgroundColor: 'green'
  },
});

export default DoctorTab;
