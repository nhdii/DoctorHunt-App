import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import OnBoardingScreen01 from '../screens/OnBoardingScreen01';
import OnBoardingScreen02 from '../screens/OnBoardingScreen02';
import OnBoardingScreen03 from '../screens/OnBoardingScreen03';
import BottomNavigation from './bottomNavigation';
import LiveStreamScreen from '../screens/LiveStreamScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnBoarding01" component={OnBoardingScreen01}/>
      <Stack.Screen name="OnBoarding02" component={OnBoardingScreen02}/>
      <Stack.Screen name="OnBoarding03" component={OnBoardingScreen03}/>
      <Stack.Screen name="LiveStream" component={LiveStreamScreen}/>
      <Stack.Screen name="BottomNav" component={BottomNavigation}/>
      <Stack.Screen name="Search" component={SearchScreen}/>
    </Stack.Navigator>
  );
};

export default AppStack;