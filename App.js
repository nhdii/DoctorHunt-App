import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from './screens/SplashScreen'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './navigation/AppStack'


export default function App() {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  )
}