import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, Animated, Modal, PanResponder, TouchableWithoutFeedback } from 'react-native';
import ButtonComponent from '../components/buttonComponent';
import TextComponent from '../components/textComponent';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle show/hide password
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEmail, setModalEmail] = useState(''); // State for the email input in modal
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
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          translateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          hideModal();
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            tension: 20,
            friction: 7,
            useNativeDriver: true,
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
                onRequestClose={hideModal}
            >
                <TouchableWithoutFeedback onPress={hideModal}>
                    <View style={styles.modalOverlay} />
                </TouchableWithoutFeedback>
                <Animated.View
                    style={[styles.modalView, { transform: [{ translateY }] }]}
                    {...panResponder.panHandlers}
                >
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={hideModal}>
                          <View style={styles.modalRectangle} />
                        </TouchableOpacity>

                        <View style={styles.descriptionContainer}>
                          <Text style={styles.modalTitle}>Forgot Password</Text>

                          <Text style={styles.modalDescription}>
                            Enter your email for the verification process, we will send a 4-digit code to your email.
                          </Text>
                        </View>

                        <TextInput
                          style={styles.modalEmailInput}
                          placeholder="Email"
                          value={modalEmail}
                          onChangeText={setModalEmail}
                          keyboardType="email-address"
                        />

                        <View style={{marginBottom: 30}}>
                          <ButtonComponent 
                              title="Continue"
                              onPress={() => console.log('Send code to:', modalEmail)}
                              width={295}
                              height={54}
                              borderRadius={12}
                              textSize={18}
                          />
                        </View>
                        
                    </View>
                </Animated.View>
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

  modalOverlay: {
    flex: 1,
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
    position: 'absolute',
    bottom: 0,
  },

  modalContent: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  modalRectangle: {
    width: 130,
    height: 5,
    backgroundColor: '#rgba(196, 196, 196, 1)',
    borderRadius: 6,
    marginBottom: 55,
  },

  descriptionContainer:{
    width: 288,
    marginBottom: 36,
    marginLeft: -39
  },

  modalTitle: {
    fontSize: 24,
    lineHeight: 28.44, 
    letterSpacing: -0.3,
    fontWeight: 'bold',
    marginBottom: 12,
    color: 'rgba(0, 0, 0, 1)',
  },

  modalDescription: {
    fontSize: 14,
    lineHeight: 21.18,
    fontWeight: '400',
    color: 'rgba(103, 114, 148, 1)',
  },

  modalEmailInput: {
    width: 335,
    height: 54,
    borderColor: 'rgba(103, 114, 148, 0.16)',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 25,
    marginBottom: 30,
  }
});

export default LoginScreen;
