import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AppStack from './AppStack';
import { ChevronRightIcon } from 'react-native-heroicons/outline';
import { ArrowLeftStartOnRectangleIcon } from 'react-native-heroicons/outline';
import MyDoctorScreen from '../screens/MyDoctorScreen';
import MedicalRecordsScreen from '../screens/MedicalRecordsScreen';
import MedicineOrdersScreen from '../screens/MedicineOrdersScreen';
import HelpCenterScreen from '../screens/HelpCenterScreen';
import TestBookingsScreen from '../screens/TestBookingsScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import SettingScreen from '../screens/SettingScreen';

const Drawer = createDrawerNavigator();

const DrawerContent = (props) => { 
    const navigation = useNavigation();

    const handleLogout = () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to logout?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    };

    return (
        <LinearGradient
            colors={['#6F7FA1', '#536184']}
            style={{ flex: 1 }}
        >
            <View style={styles.profileContainer}>
                <Image source={require('../assets/images/Ellipse26.png')} style={styles.avatar} />
                <View style={styles.profileTextContainer}>
                    <Text style={styles.profileName}>User Name</Text>
                    <Text style={styles.profilePhone}>+123456789</Text>
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={() => props.navigation.closeDrawer()}>
                    <Image source={require('../assets/images/closeIcon.png')} style={styles.closeIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.menuContainer}>
                {[
                    { name: 'My Doctor', icon: require('../assets/images/myDoctorIcon.png'), screen: 'MyDoctor'},
                    { name: 'Medical Records', icon: require('../assets/images/medicalRecordsIcon.png'), screen: 'MedicalRecords' },
                    { name: 'Payments', icon: require('../assets/images/paymentsIcon.png')},
                    { name: 'Medicine Orders', icon: require('../assets/images/medicineOrdersIcon.png'), screen: 'MedicineOrders' },
                    { name: 'Test Bookings', icon: require('../assets/images/testBookingsIcon.png'), screen: 'TestBookings' },
                    { name: 'Privacy & Policy', icon: require('../assets/images/privacyPolicyIcon.png'), screen: 'PrivacyPolicy' },
                    { name: 'Help Center', icon: require('../assets/images/helpCenterIcon.png'), screen: 'HelpCenter' },
                    { name: 'Setting', icon: require('../assets/images/settingIcon.png'), screen: 'Setting' },
                ].map((item, index) => (
                    <TouchableOpacity onPress={()=>{ navigation.navigate(item.screen)}} key={index} style={styles.menuItem}>
                        <Image source={item.icon} style={styles.menuIcon} />
                        <Text style={styles.menuText}>{item.name}</Text>
                        <ChevronRightIcon size={24} color="white"/>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                <ArrowLeftStartOnRectangleIcon size={24} color="rgba(255, 255, 255, 1)"/>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <DrawerContent {...props} />}
                screenOptions={{ headerShown: false }}
            >
                <Drawer.Screen name="HomeDrawer" component={AppStack} />
                <Drawer.Screen name="MyDoctor" component={MyDoctorScreen} /> 
                <Drawer.Screen name="MedicalRecords" component={MedicalRecordsScreen} /> 
                <Drawer.Screen name="MedicineOrders" component={MedicineOrdersScreen} /> 
                <Drawer.Screen name="HelpCenter" component={HelpCenterScreen}/>
                <Drawer.Screen name="TestBookings" component={TestBookingsScreen} />
                <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen}/>
                <Drawer.Screen name="Setting" component={SettingScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        width: 335,
        height: 44,
        marginTop: 46,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
    },

    profileTextContainer: {
        marginLeft: 10,
    },

    profileName: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    profilePhone: {
        color: '#FFF',
        fontSize: 14,
    },
    
    closeButton: {
        marginLeft: 60,
    },

    closeIcon: {
        width: 24,
        height: 24,
    },

    menuContainer: {
        marginTop: 72,
    },

    menuItem: {
        width: 212,
        height: 61,
        marginLeft: 20,
        borderRadius: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 5,
    },

    menuIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },

    menuText: {
        color: '#FFF',
        fontSize: 16,
        flex: 1,
    },

    menuChevron: {
        width: 24,
        height: 24,
    },

    logoutButton: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        left: 20,
    },

    logoutText: {
        color: '#FFF',
        fontSize: 16,
    },
});

export default DrawerNavigation;
