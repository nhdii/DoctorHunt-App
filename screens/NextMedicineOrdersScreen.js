import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackArrowIcon from '../assets/icon/backArrowIcon'
import TextComponent from '../components/textComponent'
import { useNavigation } from '@react-navigation/native'
import SearchBar from '../components/searchBar'
import MedicineOrdersCard from '../components/medicineOrdersCard'

export default function NextMedicineOrdersScreen() {
    const navigation = useNavigation();

    const medicineOrderData = [
        {
            image: require('../assets/images/guideToMedicineOrder.png'),
            nameMedicine: "Guide to medicine order"
        },
        {
            image: require('../assets/images/prescriptionRelated.png'),
            nameMedicine: "Prescription related issues"
        },
        {
            image: require('../assets/images/orderStatus.png'),
            nameMedicine: "Order Status"
        },
        {
            image: require('../assets/images/orderDelivery.png'),
            nameMedicine: "Order delivery"
        },
        {
            image: require('../assets/images/paymentsAndRefunds.png'),
            nameMedicine: "Payments & Refunds"
        },
        {
            image: require('../assets/images/orderReturn.png'),
            nameMedicine: "Order returns"
        },

    ]

    const handleSearch = (text) => {
        // Xử lý tìm kiếm ở đây
        setSearchText(text);

    };

  return (
    <SafeAreaView style={styles.safeAreaStyle }>
        <View style={styles.header}>
            <BackArrowIcon onPress={() => navigation.goBack()} />
            <TextComponent style={styles.textHeader}>Medicines Orders</TextComponent>
        </View>

        <View style={styles.searchBar}>
            <SearchBar
                onChangeText={handleSearch}
            />
        </View>

        <ScrollView contentContainerStyle={styles.contentContainer}>
            {medicineOrderData.map((data, index) => (
                <TouchableOpacity 
                    key={index}
                    onPress={()=> {}}
                >
                    <MedicineOrdersCard
                        image={data.image}
                        nameMedicine={data.nameMedicine}
                    />
                </TouchableOpacity>
            ))}
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    safeAreaStyle:{
        flex: 1,
        padding: 20
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

    searchBar: {
        marginHorizontal: 10
    },

    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 20,
        justifyContent: 'center',
    },
})