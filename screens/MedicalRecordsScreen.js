import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import BackArrowIcon from '../assets/icon/backArrowIcon';
import TextComponent from '../components/textComponent';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import CustomScreenComponent from '../components/customScreenComponent';
import AddRecordsAlert from '../components/addRecordsAlert';
import GradientCircle from '../components/gradientCircle';

export default function MedicalRecordsScreen() {
    const navigation = useNavigation();
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const data = {
        image: require('../assets/images/MedicalRecordImage.png'),
        title: 'Add a medical record.',
        content: 'A detailed health history helps a doctor diagnose you btter.',
        button: {
            text: 'Add a Record',
            onPress: () => {
                navigation.navigate('AddRecords')
            },
        },
    };

    const handleSwipeUp = ({ nativeEvent }) => {
        if (nativeEvent.state === State.END) {
          setIsAlertVisible(true);
        }
    };

  return (
    <SafeAreaView style={styles.container}>
        {/* Gradient Circle */}
        <View style={styles.bg}>
            <View style={styles.topGradientCircleContainer}>
                <GradientCircle size={216} colors={['rgba(135, 206, 235, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
            </View>
            
            <View style={styles.bottomGradientCircleContainer}>
                <GradientCircle size={257} colors={['rgba(14, 190, 126, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
            </View>
        </View>

        <View style={styles.header}>
            <BackArrowIcon onPress={() => navigation.goBack()} />
            <TextComponent style={styles.textHeader}>Medical Records</TextComponent>
        </View>

        <PanGestureHandler onHandlerStateChange={handleSwipeUp}>
            <View>
                <CustomScreenComponent {...data} />
            </View>
        </PanGestureHandler>

        <AddRecordsAlert
            visible={isAlertVisible}
            onClose={() => setIsAlertVisible(false)}
            onTakePhoto={() => console.log('Take Photo')}
            onUploadFromGallery={() => console.log('Upload from Gallery')}
            onUploadFiles={() => console.log('Upload Files')}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 36
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 34
    },

    textHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 21.33,
        letterSpacing: -0.3,
        color: 'rgba(34, 34, 34, 1)',
        marginLeft: 19,
    },

    bg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        zIndex: -10
    },
    
    topGradientCircleContainer: {
        position: 'absolute',
        top: -32,
        left: -72,
    },

    bottomGradientCircleContainer: {
        position: 'absolute',
        bottom: -90,
        right: -70,
    },

})