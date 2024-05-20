import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, Animated, Modal, PanResponder, TouchableWithoutFeedback } from 'react-native';
import ButtonComponent from '../components/buttonComponent';
import TextComponent from '../components/textComponent';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [resetModalVisible, setResetModalVisible] = useState(false); // State for Reset Password modal
  const [modalEmail, setModalEmail] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [code, setCode] = useState(['', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const translateY = useRef(new Animated.Value(500)).current;
  const resetModalTranslateY = useRef(new Animated.Value(500)).current; // Animated value for Reset Password modal

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('BottomNav');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
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

  const resetPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          resetModalTranslateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          hideResetModal();
        } else {
          Animated.spring(resetModalTranslateY, {
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
      setIsCodeSent(false);
      setModalEmail('');
      setCode(['', '', '', '']);
    });
  };

  const showResetModal = () => {
    setResetModalVisible(true);
    Animated.timing(resetModalTranslateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const hideResetModal = () => {
    Animated.timing(resetModalTranslateY, {
      toValue: 500,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setResetModalVisible(false);
      setNewPassword('');
      setConfirmPassword('');
    });
  };

  const handleContinue = () => {
    if (isCodeSent) {
      console.log('Verify code:', code.join(''));
      hideModal();
      showResetModal(); // Show Reset Password modal after verifying code
    } else {
      console.log('Send code to:', modalEmail);
      setIsCodeSent(true);
    }
  };

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handlePasswordUpdate = () => {
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
    // Perform password update logic here
    hideResetModal();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.greetingTitle}>Welcome back</Text>
        <Text style={styles.greeting}>You can search course, apply course and find scholarship for abroad studies</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={[styles.socialButton, { marginRight: 15 }]}>
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

        <View style={{ marginTop: 32 }}>
          <ButtonComponent
            title="Login"
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
              Don't have an account?
            </TextComponent>
            <TouchableOpacity onPress={() => {navigation.navigate('SignUp')}}>
              <TextComponent style={styles.joinUs}> Join us</TextComponent>
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
                {isCodeSent ? (
                  <>
                    <Text style={styles.modalTitle}>Enter 4 Digits Code</Text>
                    <Text style={styles.modalDescription}>
                      Enter the 4 digits code that you received on your email.
                    </Text>
                    <View style={styles.codeInputContainer}>
                      {code.map((digit, index) => (
                        <TextInput
                          key={index}
                          style={styles.codeInput}
                          value={digit}
                          onChangeText={(value) => handleCodeChange(index, value)}
                          keyboardType="numeric"
                          maxLength={1}
                        />
                      ))}
                    </View>
                  </>
                ) : (
                  <>
                    <Text style={styles.modalTitle}>Forgot Password</Text>
                    <Text style={styles.modalDescription}>
                      Enter your email for the verification process, we will send a 4-digit code to your email.
                    </Text>
                    <TextInput
                      style={styles.modalEmailInput}
                      placeholder="Email"
                      value={modalEmail}
                      onChangeText={setModalEmail}
                      keyboardType="email-address"
                    />
                  </>
                )}
              </View>

              <View style={{ marginBottom: 30 }}>
                <ButtonComponent
                  title={isCodeSent ? "Continue" : "Continue"}
                  onPress={handleContinue}
                  width={295}
                  height={54}
                  borderRadius={12}
                  textSize={18}
                />
              </View>
            </View>
          </Animated.View>
        </Modal>

        <Modal
          animationType="none"
          transparent={true}
          visible={resetModalVisible}
          onRequestClose={hideResetModal}
        >
          <TouchableWithoutFeedback onPress={hideResetModal}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>
          <Animated.View
            style={[styles.resetModalView, { transform: [{ translateY: resetModalTranslateY }] }]}
            {...resetPanResponder.panHandlers}
          >
            <View style={styles.resetModalContent}>
              <TouchableOpacity onPress={hideResetModal}>
                <View style={styles.modalRectangle} />
              </TouchableOpacity>

              <View style={styles.descriptionContainer}>

                <Text style={styles.modalTitle}>Reset Password</Text>

                <Text style={styles.modalDescription}> 
                  can login and access all the features.
                  Set the new password for your account so you
                </Text>

                <View>
                  <TextInput
                    style={styles.modalPasswordInput}
                    placeholder="New Password"
                    value={newPassword}
                    onChangeText={setNewPassword}
                    secureTextEntry={!showNewPassword}
                  />

                  <TouchableOpacity onPress={toggleNewPasswordVisibility} style={styles.eyeIcon}>
                    {showNewPassword ? <EyeIcon size="22" color="gray" /> : <EyeSlashIcon size="22" color="gray" />}
                  </TouchableOpacity>
                </View>
                
                <View>
                  <TextInput
                    style={styles.modalPasswordInput}
                    placeholder="Re-enter Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!showRePassword}
                  />

                  <TouchableOpacity onPress={toggleRePasswordVisibility} style={styles.eyeIcon}>
                    {showRePassword ? <EyeIcon size="22" color="gray" /> : <EyeSlashIcon size="22" color="gray" />}
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ marginBottom: 30, marginTop: 18 }}>
                <ButtonComponent
                  title="Update Password"
                  onPress={handlePasswordUpdate}
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
    color: 'rgba(0, 0, 0, 1)',
  },

  greeting: {
    width: 284,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 23.18,
    textAlign: 'center',
    marginTop: 15,
    color: 'rgba(103, 114, 148, 1)',
  },

  socialContainer: {
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
    elevation: 3,
  },

  socialButtonText: {
    color: 'rgba(103, 114, 148, 1)',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 18.96,
    marginLeft: 12.83,
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
    color: 'rgba(103, 114, 148, 1)',
  },

  footerContainer: {
    width: 196,
    height: 157,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  forgotPassword: {
    marginTop: 19,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.59,
    color: 'rgba(14, 190, 127, 1)',
  },

  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  question: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.59,
    textAlign: 'center',
    color: 'rgba(14, 190, 127, 1)',
  },

  joinUs: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.59,
    textAlign: 'center',
    color: 'rgba(14, 190, 127, 1)',
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
    width: '100%',
    height: 390,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },

  resetModalView: {
    width: '100%',
    height: 460,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },

  modalContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  resetModalContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  modalRectangle: {
    width: 130,
    height: 5,
    backgroundColor: 'rgba(196, 196, 196, 1)',
    borderRadius: 6,
    marginBottom: 55,
  },

  descriptionContainer: {
    width: 288,
    marginLeft: -39,
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
    marginBottom: 27,
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
  },

  modalPasswordInput: {
    width: 335,
    height: 54,
    borderColor: 'rgba(103, 114, 148, 0.16)',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 25,
    marginBottom: 20,
  },

  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginLeft: 54,
  },

  codeInput: {
    fontFamily: 'PT Sans',
    fontWeight: '700',
    fontSize: 26,
    lineHeight: 40.87,
    color: 'rgba(14, 190, 127, 1)',
    width: 54.17,
    height: 54.17,
    borderColor: 'rgba(103, 114, 148, 0.16)',
    borderWidth: 0.8,
    borderRadius: 12,
    marginRight: 16.83,
    textAlign: 'center',
  },
});

export default LoginScreen;
