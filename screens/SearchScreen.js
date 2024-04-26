import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from '../assets/icon/backArrowIcon'
import { useNavigation } from '@react-navigation/native'
import TextComponent from '../components/textComponent';
import SearchBar from '../components/searchBar';
import DoctorSearchCard from '../components/doctorSearchCard';

export default function SearchScreen() {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
        // Xử lý tìm kiếm ở đây
        setSearchText(text);

    };

    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <BackArrowIcon onPress={() => navigation.goBack()} />
                <TextComponent style={styles.textHeader}>
                    Find Doctors
                </TextComponent>
            </View>

            {/* Search Bar */}
            <View style={styles.searchBar}>
                <SearchBar
                    onChangeText={handleSearch}
                />
            </View>

            {/* List doctor result */}
            <ScrollView style={styles.listCard}>
                <DoctorSearchCard />
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 36
    },

    header:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 9,
        paddingHorizontal: 20
    },

    textHeader: {
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 21.33,
        letterSpacing: -0.3,
        color: 'rgba(34, 34, 34, 1)',
        marginLeft: 19,
    },

    searchBar:{
        marginTop: 36,
    },

    listCard:{
        marginTop: 24,
        marginHorizontal: 20
    }

})