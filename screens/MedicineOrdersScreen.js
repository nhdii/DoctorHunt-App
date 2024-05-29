import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomScreenComponent from '../components/customScreenComponent';
import HeaderComponent from '../components/headerComponent';
import GradientCircle from '../components/gradientCircle';

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
        <View style={styles.topGradientCircleContainer}>
            <GradientCircle size={216} colors={['rgba(135, 206, 235, 0.3)', 'rgba(255, 255, 255, 0.3)']} />

        </View>
        <CustomScreenComponent 
            {...data}
        />

        <View style={styles.bottomGradientCircleContainer}>
            <GradientCircle size={216} colors={['rgba(14, 190, 126, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    topGradientCircleContainer: {
        position: 'absolute',
        top: -33,
        left: -99,
    },

    bottomGradientCircleContainer: {
        position: 'absolute',
        bottom: -60,
        right: -70,
    },

})