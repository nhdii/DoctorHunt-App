import { StyleSheet, Text, View, Modal, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ButtonComponent from './buttonComponent'
import TextComponent from './textComponent'

export default function CustomAlert({ visible, onClose, doctorName, appointmentDate, appointmentTime }) {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
    >
        <View style={styles.alertContainer}>
            <View style={styles.contentContainer}>
                <View style={styles.iconContainer}>
                    <Image source={require('../assets/icon/likeIcon.png')} />
                </View>

                <View style={styles.messageContainer}>
                    <TextComponent style={styles.title}>
                        Thank you!
                    </TextComponent>

                    <TextComponent style={styles.notiMessage}>
                        Your Appointment Successful
                    </TextComponent>

                    <TextComponent style={styles.inforMessage}>
                        You booked an appointment with {doctorName} on {appointmentDate}, at {appointmentTime}
                    </TextComponent>
                </View>

                <View style={styles.button}>
                    <ButtonComponent 
                        title="Done"
                        onPress={onClose}
                        width={295}
                        height={54}
                        borderRadius={6}
                        textSize={18}
                    />
                </View>

                <TouchableOpacity>
                    <TextComponent style={styles.editText}>
                        Edit your appointment
                    </TextComponent>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    alertContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    contentContainer: {
        width: 335,
        height: 520,
        borderRadius: 16,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconContainer:{
        width: 156,
        height: 156, 
        borderRadius: 78,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(231, 248, 242, 1)'

    },

    messageContainer: {
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 38,
        fontWeight: 'bold',
        lineHeight: 45.03,
        letterSpacing: -0.3,
    },

    notiMessage: {
        fontSize: 20,
        fontWeight: "400",
        lineHeight: 23.7,
        letterSpacing: -0.3,
        marginTop: 5,
        color: "rgba(103, 114, 148, 1)",
    },

    inforMessage: {
        width: 265,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: -0.3,
        marginTop: 29,
        textAlign: 'center',
        color: 'rgba(103, 114, 148, 1)'
    },

    button: {
        marginTop: 29
    },

    editText: {
        marginTop: 18,
        fontSize: 14,
        fontWeight:"400",
        lineHeight: 16.59,
        letterSpacing: -0.3,
        color: 'rgba(103, 114, 148, 1)'
    }
})