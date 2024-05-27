import React from 'react';
import { Text, StyleSheet  } from 'react-native';

const TextComponent = ({ children, fontSize, fontWeight, lineHeight, color, style  }) => {
  return (
    <Text style={[styles.defaultStyle,{fontSize, fontWeight, lineHeight, color}, style ]}>
      {children}
    </Text>
  );
};

// Style mặc định
const styles = StyleSheet.create({
  defaultStyle: {
    letterSpacing: -0.3, 
    fontFamily: 'Rubik',
  },
});

export default TextComponent;
