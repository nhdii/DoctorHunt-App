import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { MagnifyingGlassIcon, XMarkIcon } from "react-native-heroicons/outline";

const SearchBar = ({ onChangeText }) => {

    const navigation = useNavigation();

    const handleClear = () => {
        onChangeText(''); // Xóa nội dung tìm kiếm
    };

    const handleSearchScreenNavigation = () => {
        navigation.navigate('Search'); // Chuyển đến trang SearchScreen
    };

  return (
    <View style={styles.container}>
        <MagnifyingGlassIcon strokeWidth={2.5} color='rgba(103, 114, 148, 1)' style={styles.magnifyingIcon} />

        <TouchableOpacity style={styles.input} onPress={handleSearchScreenNavigation}>
            <TextInput
                placeholder="Search....."
                placeholderTextColor='rgba(103, 114, 148, 1)'
                editable={false} // Tắt tính năng chỉnh sửa trực tiếp trên TextInput
            />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleClear}>
            <XMarkIcon size={22} strokeWidth={2.5} color='rgba(103, 114, 148, 1)' style={styles.xMarkIcon} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    width: 335,
    height: 54,
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',

  },

  magnifyingIcon: {
    width: 13,
    height: 13,
    marginLeft: 20,
    marginRight: 12
  },

  input: {
    flex: 1,
    color: 'rgba(103, 114, 148, 1)'
  },

  xMarkIcon:{
    width: 11,
    height: 11,
    marginRight: 20
  }
});

export default SearchBar;
