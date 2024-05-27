import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';
import HeaderComponent from '../components/headerComponent';
import LinearGradient from 'react-native-linear-gradient'

const ProfileScreen = () => {
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
                <Text style={styles.subtitle}>Set up your profile</Text>
                <Text style={styles.description}>Update your profile to connect your doctor with better impression.</Text>
                <View style={styles.profileImageContainer}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder image URL
                    />
                    <TouchableOpacity style={styles.cameraIcon}>
                        <Text style={styles.cameraIconText}>📷</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

      <View style={styles.form}>
        <Text style={styles.label}>Personal information</Text>

        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Text>✏️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            value={contactNumber}
            onChangeText={setContactNumber}
            keyboardType="phone-pad"
          />
          <TouchableOpacity style={styles.editIcon}>
            <Text>✏️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Date of Birth"
            value={dob}
            onChangeText={setDob}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Text>✏️</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
        />

        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
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
    backgroundColor: 'rgba(14, 190, 127, 1)'
  },

  profileSection:{
    alignItems: 'center'
  },

  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    color: '#666',
  },

  profileImageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderRadius: 50,
    padding: 5,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  cameraIconText: {
    fontSize: 18,
  },
  form: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
  },
  editIcon: {
    marginLeft: 10,
  },
  continueButton: {
    backgroundColor: '#00C853',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
