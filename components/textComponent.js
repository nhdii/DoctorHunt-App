import React from 'react';
import { Text } from 'react-native';

const TextComponent = ({ children, style, ...props }) => {
  return (
    <Text style={[{ fontFamily: 'Rubik', letterSpacing: -0.3 }, style]} {...props}>
      {children}
    </Text>
  );
};

export default TextComponent;
