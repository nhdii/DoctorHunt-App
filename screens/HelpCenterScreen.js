import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import HeaderComponent from '../components/headerComponent'
import SearchBar from '../components/searchBar';
import TextComponent from '../components/textComponent';
import { ChevronRightIcon } from 'react-native-heroicons/outline';

export default function HelpCenterScreen() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const issues = [
    { title: 'Booking a new Appointment', navigateTo: '' },
    { title: 'Existing Appointment', navigateTo: '' },
    { title: 'Online consultations', navigateTo: '' },
    { title: 'Feedbacks', navigateTo: '' },
    { title: 'Medicine orders', navigateTo: '' },
    { title: 'Diagnostic Tests', navigateTo: '' },
    { title: 'Health plans', navigateTo: '' },
    { title: 'My account and Practo Drive', navigateTo: '' },
    { title: 'Have a feature in mind', navigateTo: '' },
    { title: 'Other issues', navigateTo: '' },

  ];

  const handleSearch = (text) => {
    // Xử lý tìm kiếm ở đây
    setSearchText(text);

};

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <HeaderComponent title="Help Center" />

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <SearchBar
            onChangeText={handleSearch}
        />
      </View>

      {/* Issues List */}
      {issues.map((issue, index) => (
        <TouchableOpacity key={index} onPress={() => {}}>
          <View style={styles.issueStyle}>
            <TextComponent style={styles.textIssue}>
              {issue.title}
            </TextComponent>

            <ChevronRightIcon size={22} color="rgba(103, 114, 148, 1)" />
          </View>
        </TouchableOpacity>
      ))}
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

  searchBar:{
    alignItems: 'center'
  },

  issueStyle:{
    marginTop: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15
  },

  textIssue:{
    fontSize: 18, 
    lineHeight: 21.33,
    color: 'rgba(103, 114, 148, 1)'
  }

})