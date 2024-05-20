import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import BackArrowIcon from '../assets/icon/backArrowIcon';
import TextComponent from '../components/textComponent';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import CustomScreenComponent from '../components/customScreenComponent';
import AddRecordsAlert from '../components/addRecordsAlert';

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

})