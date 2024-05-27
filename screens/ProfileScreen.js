import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';
import HeaderComponent from '../components/headerComponent';
import LinearGradient from 'react-native-linear-gradient'
import TextComponent from '../components/textComponent';
import { CameraIcon, PencilIcon } from 'react-native-heroicons/solid';
import ButtonComponent from '../components/buttonComponent';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {

    const navigation = useNavigation();
    const [name, setName] = useState('Abdullah Mamun');
    const [contactNumber, setContactNumber] = useState('+8801800000000');
    const [dob, setDob] = useState('');
    const [location, setLocation] = useState('');

    const handleContinue = () => {
        // Handle the continue action
    };

  return (
    <SafeAreaView style={styles.container}>
        <LinearGradient 
            colors={['rgba(14, 190, 126, 1)', 'rgba(7, 217, 173, 1)']} 
            start={{x: 0, y: 0}} 
            end={{x: 1, y: 1}}
        >
            <StatusBar
                animated={true}
                backgroundColor='transparent'
                translucent={true}
            />
        </LinearGradient>
        
        <View style={styles.profileSectionContainer}>
            <HeaderComponent title="Profile" titleColor="rgba(255, 255, 255, 1)"/>

            <View style={styles.profileSection}>
                <TextComponent style={styles.subtitle}>Set up your profile</TextComponent>
                <TextComponent style={styles.description}>Update your profile to connect your doctor with better impression.</TextComponent>
                <View style={styles.profileImageContainer}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder image URL
                    />
                    <TouchableOpacity style={styles.cameraIcon}>
                        <CameraIcon size={20} color="white"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={styles.form}>
            <TextComponent style={styles.label}>Personal information</TextComponent>

            <View style={styles.inputGroup}>
                <View style={styles.inputContainer}>
                    <TextComponent style={styles.inputTitle}>Name</TextComponent>
                    <TextInput
                        style={styles.input}
                        placeholder="Abdullah Mamun"
                        value={name}
                        onChangeText={setName}
                    />
                </View>

            </View>

            <View style={styles.inputGroup}>
                <View style={styles.inputContainer}>
                    <TextComponent style={styles.inputTitle}>Contact Number</TextComponent>

                    <TextInput
                        style={styles.input}
                        placeholder="Contact Number"
                        value={contactNumber}
                        onChangeText={setContactNumber}
                        keyboardType="phone-pad"
                    />
                </View>
                <TouchableOpacity style={styles.editIcon}>
                    <PencilIcon size={20} color="rgba(103, 114, 148, 1)" />
                </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
                <View style={styles.inputContainer}>
                    <TextComponent style={styles.inputTitle}>Contact Number</TextComponent>

                    <TextInput
                        style={styles.input}
                        placeholder="Date of Birth"
                        value={dob}
                        onChangeText={setDob}
                    />
                </View>
                <TouchableOpacity style={styles.editIcon}>
                    <PencilIcon size={20} color="rgba(103, 114, 148, 1)" />
                </TouchableOpacity>
            </View>

            <View  style={styles.inputGroup}>
                <View style={styles.inputContainer}>
                    <TextComponent style={styles.inputTitle}>Location</TextComponent>

                    <TextInput
                        style={styles.input}
                        placeholder="Add Detail"
                        value={location}
                        onChangeText={setLocation}
                    />
                </View>
            </View>

            <View style={styles.button}>
                <ButtonComponent
                    title="Continue"
                    onPress={()=>{navigation.navigate('EditProfile')}}
                    width={295}
                    height={54}
                    borderRadius={6}
                    textSize={18}
                />
            </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profileSectionContainer: {
    paddingTop: 36,
    padding: 20,
    height: 357,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: 'rgba(14, 190, 127, 1)',
    marginBottom: 15,
  },

  profileSection:{
    alignItems: 'center'
  },

  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'rgba(255, 255, 255, 1)'
  },

  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 22,
    color: 'rgba(255, 255, 255, 1)',
  },

  profileImageContainer: {
    position: 'relative',
    marginBottom: 20,
  },

  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },

  cameraIcon: {
    width: 36,
    height: 36,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(103, 114, 148, 0.8)',
    borderRadius: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },

  form: {
    paddingHorizontal: 20,

  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 21.33,
    color: 'rgba(51, 51, 51, 1)',
    marginBottom: 12,
  },

  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 1)',

  },

  inputContainer:{
    paddingTop: 9,
    flexDirection: 'column',
    height: 60,
    
  },

  inputTitle:{
    fontSize: 10,
    fontWeight: 'bold',
    color: 'rgba(14, 190, 127, 1)'
  },

  input: {
    flex: 1, 
    borderRadius: 12,
  },

  editIcon: {
    marginLeft: 10,
  },

  button:{
    alignItems: 'center'

    }
});

export default ProfileScreen;
