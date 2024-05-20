import { StyleSheet, Text, View, Modal, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import TextComponent from './textComponent';
import ButtonComponent from '../components/buttonComponent';

export default function AddRecordsAlert({ visible, onClose, onTakePhoto, onUploadFromGallery, onUploadFiles }) {
  return (
    <GestureHandlerRootView style={styles.gestureHandlerRoot}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.alertContainer}>
                    <View style={styles.contentContainer}>

                        <TouchableOpacity style={styles.handle}  onPress={onClose}/>


                        <TextComponent style={styles.title}>Add a record</TextComponent>
                        
                        <TouchableOpacity style={styles.optionButton} onPress={onTakePhoto}>
                            <Image source={require('../assets/images/camera.png')} />
                            <TextComponent style={styles.optionText}>Take a photo</TextComponent>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.optionButton} onPress={onUploadFromGallery}>
                            <Image source={require('../assets/images/gallery.png')} />   
                            <TextComponent style={styles.optionText}>Upload from gallery</TextComponent>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.optionButton} onPress={onUploadFiles}>
                            <Image source={require('../assets/images/file.png')} />
                            <TextComponent style={styles.optionText}>Upload files</TextComponent>
                        </TouchableOpacity>
                    
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
    gestureHandlerRoot: {
        flex: 1,
    },
    
    alertContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    contentContainer: {
        width: '100%',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: 20,
        paddingBottom: 43
    },

    handle: {
        width: 130,
        height: 5,
        borderRadius: 6,
        backgroundColor: 'rgba(196, 196, 196, 1)',
        alignSelf: 'center',
        // marginVertical: 10,
        marginBottom: 29
      },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 26.07,
        color: 'rgba(0, 0, 0, 1)',
        marginBottom: 20,
    },

    optionButton: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 21,
    },

    optionText: {
        fontSize: 16,
        marginLeft: 13,
        lineHeight: 18.96,
        fontWeight: '400',
        color: 'rgba(103, 114, 148, 1)'
    },
});
