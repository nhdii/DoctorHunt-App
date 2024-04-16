import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import OnBoardingScreen01 from '../screens/OnBoardingScreen01';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Splash" options={{headerShown: false}} component={SplashScreen} /> */}
      <Stack.Screen name="OnBoarding01" options={{headerShown: false}} component={OnBoardingScreen01}/>
    </Stack.Navigator>
  );
};

export default AppStack;