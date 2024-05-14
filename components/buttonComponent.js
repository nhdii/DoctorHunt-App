import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextComponent from './textComponent'

export default function ButtonComponent({ title, onPress, width = 140, height = 32, borderRadius = 4, backgroundColor = 'rgba(14, 190, 127, 1)', textSize = 18 }) {
  return (
    <TouchableOpacity 
        style={[styles.button, { width, height, borderRadius, backgroundColor }]} 
        onPress={onPress}
    >
        <TextComponent style={[styles.buttonText, { fontSize: textSize }]}>{title}</TextComponent>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    button: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 16.59,
        color: 'rgba(255, 255, 255, 1)'
      }
})