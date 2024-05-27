import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomScreenComponent from '../components/customScreenComponent';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../components/headerComponent';

export default function PatientScreen() {
    const navigation = useNavigation();

    const data = {
        image: require('../assets/images/patient.png'),
        title: 'Your cart is empty',
        button: {
            text: 'Add Tests',
            onPress: () => {
                navigation.navigate('PatientDetail')
            },
        },
    };
  return (
    <SafeAreaView style={styles.container}>
        <HeaderComponent title="Patient Detail"/>

        <CustomScreenComponent 
            {...data}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 36
    },
})