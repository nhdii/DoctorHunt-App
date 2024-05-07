import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientCircle = ({ size = 200, colors = ['rgba(255, 255, 255, 1)', 'rgba(255,255,255,0)'], start = {x: 1.25, y: 1} ,color = '#4C669F' }) => {
  const circleSize = { width: size, height: size };
  const circleRadius = { borderRadius: size / 2 };
  const centerColor = { backgroundColor: color };

  return (
    <View style={[styles.circle, circleSize, circleRadius, centerColor]}>
      <LinearGradient
        colors={[...colors]}
        style={[styles.gradient, circleSize, circleRadius]}
        start={{ x: 1.25, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        locations={[0.75, 1]}
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
