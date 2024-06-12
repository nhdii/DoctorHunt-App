import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import HeaderComponent from '../components/headerComponent'
import TextComponent from '../components/textComponent'
import ButtonComponent from '../components/buttonComponent';
import { auth, firestore } from '../config/firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function EditProfile() {
  const [name, setName] = useState();
  const user = auth.currentUser; // Get the current authenticated user

  const handleSave = async () => {
    if (user) {
        try {
            const userDocRef = doc(firestore, 'users', user.uid);
            const userProfile = { name: name || '' }; // Ensure non-undefined values
            await setDoc(userDocRef, userProfile, { merge: true });
            Alert.alert('Success', 'Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
            Alert.alert('Error', 'Failed to update profile');
        }
    } else {
        Alert.alert('Error', 'No user logged in');
    }
  };

  return (
    <View style={styles.container}>
      <HeaderComponent title="Profile" titleColor="rgba(255, 255, 255, 1)"/>
      
      <View style={styles.content}>
        <TextComponent style={styles.questionStyle}>
          What is your name?
        </TextComponent>
        <TextInput
          style={styles.textInputStyle}
          value={name}
          onChangeText={setName}
          placeholder='Your name'
        />
      </View>

      <View style={styles.button}>
        <ButtonComponent
            title="Continue"
            onPress={handleSave}
            width={295}
            height={54}
            borderRadius={6}
            textSize={18}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 36, 
      paddingHorizontal: 20,
      backgroundColor: 'rgba(85, 99, 134, 1)'
    },

    content:{
      flex: 1,
      justifyContent: 'center',
    },

    questionStyle:{
      fontSize: 18,
      fontWeight: '400',
      lineHeight: 21.33,
      color: 'rgba(255, 255, 255, 1)',
      marginBottom: 40,
    },

    textInputStyle:{
      fontSize: 22, 
      fontWeight: 'bold',
      lineHeight: 26.07,
      borderBottomWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.6)',
      color: 'rgba(255, 255, 255, 1)',
    },

    button:{
      alignItems: 'center',
      marginBottom: 20,
    }
})