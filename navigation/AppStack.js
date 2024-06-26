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
import AddRecordsScreen from '../screens/AddRecordsScreen';
import NextMedicineOrdersScreen from '../screens/NextMedicineOrdersScreen';
import DiagnosticsTestsScreen from '../screens/DiagonsticsScreen';
import PatientScreen from '../screens/PatientScreen';
import PatientDetailScreen from '../screens/PatientDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfile from '../screens/EditProfile'
import AllRecordsScreen from '../screens/AllRecordsScreen';
import PopularDoctorsScreen from '../screens/PopularSceen';
import useAuth from '../hooks/useAuth';
import DoctorsListScreen from '../screens/DoctorsListScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const {user} = useAuth();
  if(user){
    return (
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomNav" component={BottomNavigation} />
        <Stack.Screen name="LiveStream" component={LiveStreamScreen} /> 
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="SelectTime" component={SelectTimeScreen} />
        <Stack.Screen name="Favourite" component={FavouriteScreen} />
        <Stack.Screen name="DoctorDetail" component={DoctorDetailScreen} />
        <Stack.Screen name="Appointment" component={AppointmentScreen} />
        <Stack.Screen name="AppointmentSelectTime" component={AppointmentSelectTimeScreen} />
        <Stack.Screen name="AddRecords" component={AddRecordsScreen} />
        <Stack.Screen name="NextMedicineOrders" component={NextMedicineOrdersScreen} />
        <Stack.Screen name="DiagnosticsTests" component={DiagnosticsTestsScreen} />
        <Stack.Screen name="PatientScreen" component={PatientScreen} />
        <Stack.Screen name="PatientDetail" component={PatientDetailScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="AllRecords" component={AllRecordsScreen} />
        <Stack.Screen name="PopularDoctor" component={PopularDoctorsScreen} />
        <Stack.Screen name="DoctorsList" component={DoctorsListScreen} />
        
      </Stack.Navigator>
    );
  }else{
    return (
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="OnBoarding01" component={OnBoardingScreen01} />
        <Stack.Screen name="OnBoarding02" component={OnBoardingScreen02} />
        <Stack.Screen name="OnBoarding03" component={OnBoardingScreen03} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    );
  }
  
};

export default AppStack;
