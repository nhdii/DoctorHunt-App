import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import ButtonComponent from '../components/buttonComponent';
import TextComponent from '../components/textComponent';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Xử lý logic đăng ký tại đây
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
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
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

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
