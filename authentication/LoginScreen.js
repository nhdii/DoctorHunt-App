import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, Animated, Modal, PanResponder } from 'react-native';
import ButtonComponent from '../components/buttonComponent';
import TextComponent from '../components/textComponent';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle show/hide password
  const [modalVisible, setModalVisible] = useState(false);
  const translateY = useRef(new Animated.Value(500)).current;

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dy: translateY }], { useNativeDriver: false }),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          hideModal();
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            tension: 20,
            friction: 7,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const showModal = () => {
    setModalVisible(true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(translateY, {
      toValue: 500,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
    
  };

  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            <Text style={styles.greetingTitle}>Welcome back</Text>
            
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
                style={styles.emailInput}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                />

                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                    {showPassword ? <EyeIcon size="22" color="gray" /> : <EyeSlashIcon size="22" color="gray" />}
                </TouchableOpacity>
            </View>

            <View style={{marginTop: 32}}>
              <ButtonComponent 
                  title="Sign Up"
                  onPress={handleLogin}
                  width={295}
                  height={54}
                  borderRadius={12}
                  textSize={18}
              />
            </View>

            <View style={styles.footerContainer}>

                <TouchableOpacity onPress={showModal}>
                    <TextComponent style={styles.forgotPassword}>
                        Forgot password
                    </TextComponent>
                </TouchableOpacity>
                <View style={styles.questionContainer}>
                    <TextComponent style={styles.question}>
                        Have an account?
                    </TextComponent>
                    <TouchableOpacity onPress={()=>{}}>
                        <TextComponent style={styles.login}> Login</TextComponent>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    hideModal();
                }}
            >
                <View style={styles.modalContainer}>
                  <Animated.View
                      style={[styles.modalView, { transform: [{ translateY }] }]}
                      {...panResponder.panHandlers}
                  >
                      {/* Nội dung của modal */}
                      <TouchableOpacity onPress={hideModal}>
                          <Text style={{marginTop: 10 }}>Close Modal</Text>
                      </TouchableOpacity>
                  </Animated.View>
                </View>
            </Modal>

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

  emailInput: {
    width: 335,
    height: 54,
    borderColor: 'rgba(103, 114, 148, 0.16)',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 25,
    marginTop: 18,
  },

  passwordInput:{
    width: 335,
    height: 54,
    borderColor: 'rgba(103, 114, 148, 0.16)',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 25,
    marginTop: 18,
  },

  eyeIcon:{
    position: 'absolute',
    marginLeft: 295,
    paddingTop: 20
  },

  passwordContainer:{
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

  footerContainer: {
    width: 196, 
    height: 157,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  forgotPassword:{
    marginTop: 19,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16.59,
    color: "rgba(14, 190, 127, 1)"
  },

  questionContainer:{
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
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalView: {
    width: "100%",
    height: 390,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
