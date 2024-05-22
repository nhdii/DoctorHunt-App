import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/headerComponent'
import CustomScreenComponent from '../components/customScreenComponent';
import { useNavigation } from '@react-navigation/native';

export default function TestBookingsScreen() {
    const navigation = useNavigation();

    const data = {
        image: require('../assets/images/diagnosticsTest.png'),
        title: 'You haven’t booked any tests yet',
        content: 'Get started with your first health checkup',
        button: {
            text: 'Book Now',
            onPress: () => {
                navigation.navigate('NextMedicineOrders')
            },
        },
    };

  return (
    <SafeAreaView style={styles.safeArea}>
        <HeaderComponent title="Diagnostics Tests" />

        <CustomScreenComponent 
            {...data}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 36,
        // alignItems: 'center'
    },
})