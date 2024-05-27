import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import BackArrowIcon from '../assets/icon/backArrowIcon';
import TextComponent from '../components/textComponent';
import CustomScreenComponent from '../components/customScreenComponent';
import HeaderComponent from '../components/headerComponent';

export default function MedicineOrdersScreen() {
    const navigation = useNavigation();

    const data = {
        image: require('../assets/images/MedicineOrdersImage.png'),
        title: 'No orders placed yet',
        content: 'Place your first order now.',
        button: {
            text: 'Order medicines',
            onPress: () => {
                navigation.navigate('NextMedicineOrders')
            },
        },
    };

  return (
    <SafeAreaView style={styles.container}>
        <HeaderComponent title="Medicines Orders"/>

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

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 34
    },

    textHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 21.33,
        letterSpacing: -0.3,
        color: 'rgba(34, 34, 34, 1)',
        marginLeft: 19,
    },

})