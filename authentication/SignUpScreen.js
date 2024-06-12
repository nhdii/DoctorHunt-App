import React, {useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, Alert } from 'react-native';
import ButtonComponent from '../components/buttonComponent';
import TextComponent from '../components/textComponent';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, firestore } from '../config/firebase';
import { addDoc, collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';
import bcrypt from 'react-native-bcrypt';

const SignUpScreen = () => {

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  useEffect(() => {
    // Set secure PRNG for bcrypt
    bcrypt.setRandomFallback((len) => {
      const buf = new Uint8Array(len);
      return buf.map(() => Math.floor(Math.random() * 256));
    });
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async () => {
    if (name && email && password) {
      try {
        // Check if the email already exists
        const usersRef = collection(firestore, 'users');
        const q = query(usersRef, where('email', '==', email));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          Alert.alert("Error", "Email already in use.");
          return;
        }

        // Hash the password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        if (user) {
          // Cập nhật displayName vào Authentication
          await updateProfile(user, { displayName: name });

        }

        console.log("User signed up successfully:", user.uid);
        
        Alert.alert("Sign Up successful!");

        // Save user to Firestore
        await setDoc(doc(firestore, 'users', user.uid), {
          uid: user.uid,
          name: name,
          email: email,
          password: hashedPassword,
          contactNumber: '',
          dob: '',
          location:'',
          photoUrl: '',
          createAt: new Date().toISOString()
        });

      } catch (err) {
        console.log("got error: ", err.message);
        Alert.alert("Error", err.message);
      }
    } else {
      // Show alert if missing registration information
      Alert.alert("Error", "Please fill in all fields.");
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            <Text style={styles.greetingTitle}>Join us to start searching</Text>
            
            <Text style={styles.greeting}>You can search course, apply course and find scholarship for abroad studies</Text>

            <View style={styles.socialContainer}>
                <TouchableOpacity style={[styles.socialButton, {marginRight: 15}]}>
                    <Image source={require('../assets/icon/google.png')} />
                    <Text style={styles.socialButtonText}>Google</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Image source={require('../assets/icon/facebook.png')} />
                    <Text style={styles.socialButtonText}>Facebook</Text>
                </TouchableOpacity>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={value=>setName(value)}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={value=> setEmail(value)}
                keyboardType="email-address"
            />

            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                value={password}
                onChangeText={value=>setPassword(value)}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                {showPassword ? <EyeIcon size="22" color="gray" /> : <EyeSlashIcon size="22" color="gray" />}
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.checkboxContainer}>

                <TextComponent style={styles.checkboxText}>I agree with the Terms of Service and Privacy Policy</TextComponent>
            </TouchableOpacity>

            <View style={{marginTop: 54}}>
              <ButtonComponent 
                  title="Sign Up"
                  onPress={handleSignUp}
                  width={295}
                  height={54}
                  borderRadius={12}
                  textSize={18}
              />
            </View>

            <View style={styles.questionContainer}>
              <TextComponent style={styles.question}>
                Have an account?
              </TextComponent>
              <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                  <TextComponent style={styles.login}> Login</TextComponent>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  greetingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28.44,
    color: 'rgba(0, 0, 0, 1)'
  },

  greeting: {
    width: 284,
    fontSize: 14, 
    fontWeight: '400',
    lineHeight: 23.18,
    textAlign: 'center',
    marginTop: 15,
    color: 'rgba(103, 114, 148, 1)'
  },

  socialContainer:{ 
    flexDirection: 'row',
  },

  socialButton: {
    flexDirection: 'row',
    width: 160,
    height: 54,
    borderRadius: 12,
    marginTop: 67,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    elevation: 3
  },

  socialButtonText: {
    color: 'rgba(103, 114, 148, 1)',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 18.96,
    marginLeft: 12.83
  },

  input: {
    width: 335,
    height: 54,
    borderColor: 'rgba(103, 114, 148, 0.16)',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 25,
    marginTop: 18,
  },

  passwordInput: {
    width: 335,
    height: 54,
    borderColor: 'rgba(103, 114, 148, 0.16)',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 25,
    marginTop: 18,
  },

  eyeIcon: {
    position: 'absolute',
    marginLeft: 295,
    paddingTop: 20,
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },

  checkboxText: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 14.22,
    color: 'rgba(103, 114, 148, 1)'
  },

  questionContainer:{
    marginTop: 17,
    flexDirection: 'row',
    alignItems: 'center'
  },

  question:{
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.59,
    textAlign: 'center',
    color: 'rgba(14,190,127,1)'
  },

  login: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.59,
    textAlign: 'center',
    color: 'rgba(14,190,127,1)'
  }
});

export default SignUpScreen;
