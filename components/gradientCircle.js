import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientCircle = ({ size = 200, colors = ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0)'], centerColor = '#4C669F' }) => {
  const circleSize = { width: size, height: size };
  const circleRadius = { borderRadius: size / 2 };
  
  return (
    <View style={[styles.circle, circleSize, circleRadius]}>
      <LinearGradient
        colors={[...colors]}
        style={[styles.gradient, circleSize, circleRadius]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        locations={[0.5, 1]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GradientCircle;
