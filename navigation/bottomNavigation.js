import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();
const screenOptions ={
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0, 
        right: 0,
        left: 0,
        elevation: 5,
        height: 74,
        background: "#fff",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    }
}

const CustomTabBarIcon = ({ focused, icon, selectedColor }) => {
    return (
      <View style={[
        styles.tabIconContainer, focused ? styles.selectedIndicator : null
      ]}>
        <Image
          source={icon}
          style={[
            styles.tabIcon,
            { tintColor: focused ? selectedColor : 'rgba(133, 142, 169, 1)' },
          ]}
        />

        {focused && <View style={styles.selectedIndicator} />}
      </View>
    );
  };

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <CustomTabBarIcon
                    focused={focused}
                    icon={require('../assets/images/homeIcon.png')}
                    selectedColor="#rgba(255, 255, 255, 1)"
                    />
                ),
            }} 
        />
        <Tab.Screen 
            name="Home1" 
            component={HomeScreen} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <CustomTabBarIcon
                    focused={focused}
                    icon={require('../assets/images/favoriteTab.png')}
                    selectedColor="#rgba(255, 255, 255, 1)"
                    />
                ),
            }} 
        />
        <Tab.Screen 
            name="Home2" 
            component={HomeScreen} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <CustomTabBarIcon
                    focused={focused}
                    icon={require('../assets/images/bookIcon.png')}
                    selectedColor="#rgba(255, 255, 255, 1)"
                    />
                ),
            }} 
        />
        <Tab.Screen 
            name="Home3" 
            component={HomeScreen} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <CustomTabBarIcon
                    focused={focused}
                    icon={require('../assets/images/chatboxTab.png')}
                    selectedColor="#rgba(255, 255, 255, 1)"
                    />
                ),
            }} 
        />
    </Tab.Navigator>
    
  )
}

const styles = StyleSheet.create({
    tabIconContainer: {
        position: 'absolute', 
        
      },
    tabIcon: {
        width: 22,
        height: 19.89,
    },


    selectedIndicator: {
        position: 'absolute',
        width: 48, 
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24, 
        backgroundColor: 'rgba(14, 190, 126, 1)', 
        zIndex: -1,
        },
})

export default BottomNavigation