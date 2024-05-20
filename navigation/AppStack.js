import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import OnBoardingScreen01 from '../screens/OnBoardingScreen01';
import OnBoardingScreen02 from '../screens/OnBoardingScreen02';
import OnBoardingScreen03 from '../screens/OnBoardingScreen03';
import BottomNavigation from './bottomNavigation';
import LiveStreamScreen from '../screens/LiveStreamScreen';
import SearchScreen from '../screens/SearchScreen';
import SelectTimeScreen from '../screens/SelectTimeScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import DoctorDetailScreen from '../screens/DoctorDetailScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import AppointmentSelectTimeScreen from '../screens/AppointmentSelectTimeSceen';
import LoginScreen from '../authentication/LoginScreen';
import SignUpScreen from '../authentication/SignUpScreen';
import DrawerNavigation from './drawerNavigation'; // Import DrawerNavigation
import AddRecordsScreen from '../screens/AddRecordsScreen';
import NextMedicineOrdersScreen from '../screens/NextMedicineOrdersScreen';


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
      <Stack.Screen name="SelectTime" component={SelectTimeScreen}/>
      <Stack.Screen name="Favourite" component={FavouriteScreen}/>
      <Stack.Screen name="DoctorDetail" component={DoctorDetailScreen}/>
      <Stack.Screen name="Appointment" component={AppointmentScreen}/>
      <Stack.Screen name="AppointmentSelectTime" component={AppointmentSelectTimeScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="SignUp" component={SignUpScreen}/>

      <Stack.Screen name="AddRecords" component={AddRecordsScreen}/>
      <Stack.Screen name="NextMedicineOrders" component={NextMedicineOrdersScreen}/>

    </Stack.Navigator>
  );
};

export default AppStack;