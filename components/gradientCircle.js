// components/GradientCircle.js
import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientCircle = ({ size, colors, style }) => {
    return (
        <View style={[{ width: size, height: size, borderRadius: size / 2 }, style]}>
            <LinearGradient
                colors={colors}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={{ width: size, height: size, borderRadius: size / 2 }}
            />
        </View>
    );
};

export default GradientCircle;
