import React, { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackArrowIcon from '../assets/icon/backArrowIcon';
import TextComponent from '../components/textComponent';
import ButtonComponent from '../components/buttonComponent';
import { Calendar } from 'react-native-calendars';
import CustomAlert from '../components/customAlert';

export default function AppointmentSelectTimeScreen({ route }) {
    const navigation = useNavigation();
    const { doctor } = route.params;

    // State to store selected date and time
    const [selectedDate, setSelectedDate] = useState(null);

    const availableTimes = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'];
    const [selectedTime, setSelectedTime] = useState(null);
    const [reminderTime, setReminderTime] = useState(null);

    const [alertVisible, setAlertVisible] = useState(false);

    // Function to handle date selection
    const handleDateSelect = (date) => {
        setSelectedDate(date);
        console.log("got date: ", date)
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time === selectedTime ? null : time);
    };

    const handleReminderTime = (time) => {
        setReminderTime(time === reminderTime ? null : time);
    };

    const handleConfirm = () => {
        let errorMessage = '';
        if (!selectedDate) {
            errorMessage = 'Please select a date before confirming.';
        } else if (!selectedTime) {
            errorMessage = 'Please select a time before confirming.';
        }
    
        if (errorMessage) {
            Alert.alert('Error', errorMessage);
        } else {
            setAlertVisible(true);
        }
    };

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
    
    const customTheme = {
        textSectionTitleColor: 'rgba(0, 0, 0, 1)', 
        selectedDayBackgroundColor: 'rgba(14, 190, 127, 1)',
        todayTextColor: 'rgba(14, 190, 127, 1)',
        dayTextColor: 'rgba(0, 0, 0, 1)', 
        arrowColor: 'blue',
        monthTextColor: 'blue',

    };

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Header */}
            <View style={styles.header}>
                <BackArrowIcon onPress={() => navigation.goBack()} />
                <TextComponent style={styles.textHeader}>Appointment</TextComponent>
            </View>

            <View style={styles.contentContainer}>
                {/* Calendar */}
                <View style={styles.calendarContainer}>
                    <Calendar
                        style={styles.calendar}
                        onDayPress={(day) => handleDateSelect(day.dateString)}
                        markedDates={{ [selectedDate]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange'} }}
                        theme={{
                            selectedDayBackgroundColor: 'rgba(14, 190, 127, 1)',
                            todayTextColor: 'rgba(14, 190, 127, 1)',
                            textSectionTitleColor: 'rgba(0, 0, 0, 1)', 
                        }}
                    />
                    
                </View>

                <View style={styles.timeContainer}>

                    <View style={styles.availableTime}>
                        <TextComponent style={styles.availableTimeTitle}>
                            Available Time
                        </TextComponent>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {availableTimes.map((time, index) => (
                                <TouchableOpacity 
                                    key={index} 
                                    style={[styles.time, selectedTime === time ? styles.selectedTime : null]} 
                                    onPress={() => handleTimeSelect(time)}
                                >
                                    <Text style={[styles.timeText, selectedTime === time ? styles.selectedTimeText : null]}>{time}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    <View style={styles.reminder}>
                        <TextComponent style={styles.reminderTitle}>
                            Reminder Me Before
                        </TextComponent>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {availableTimes.map((time, index) => (
                                <TouchableOpacity 
                                    key={index} 
                                    style={[styles.reminderButton, reminderTime === time ? styles.selectedReminderTime : null]}
                                    onPress={()=> handleReminderTime(time)}    
                                >
                                    <Text style={[styles.reminderText, reminderTime === time ? styles.reminderTimeText : null]}>{time}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                    {/* Button */}
                    <View style={styles.buttonContainer}>
                        <ButtonComponent
                            title="Confirm"
                            onPress={handleConfirm}
                            width={295}
                            height={54}
                            borderRadius={6}
                            textSize={18}
                        />
                    </View>
                </View>
            </View>

            <CustomAlert 
                visible={alertVisible} 
                onClose={() => setAlertVisible(false)} 
                doctorName={doctor.name} 
                appointmentDate={formatDate(selectedDate)} 
                appointmentTime={selectedTime} 
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: 36,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },

    textHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgba(34, 34, 34, 1)',
        marginLeft: 19,
    },

    calendarContainer: {
        width: 339,
        height: 280,
        marginTop: 29,
        marginLeft: 16,
        left: 6,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(237, 237, 237, 1)',
        overflow: 'hidden', 
    },
    
    calendar: {
        width: '100%',
        height: '100%',
        
    },

    timeContainer:{
        width: '100%',
        height: 409,
        marginTop: 28,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },

    availableTime:{
        width: 336,
        height: 106,
        marginTop: 35,
    },

    availableTimeTitle:{
        fontSize: 16,
        lineHeight: 18.96,
        letterSpacing: -0.3,
        fontWeight: 'bold',
        color: 'rgba(51, 51, 51, 1)'
    },

    time:{
        width: 60,
        height: 60,
        borderRadius: 30,
        marginTop: 27,
        marginRight: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(14, 190, 127, 0.08)'
    },

    selectedTime: {
        backgroundColor: 'rgba(14, 190, 127, 1)',
    },

    selectedTimeText:{
        fontSize: 14,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 1)'
    },

    timeText:{
        fontSize: 14,
        fontWeight: '500',
        color: 'rgba(14, 190, 126, 1)'
    },

    reminder:{
        width: 336,
        height: 106,
        marginTop: 35,
    },

    reminderTitle:{
        fontSize: 16,
        lineHeight: 18.96,
        letterSpacing: -0.3,
        fontWeight: 'bold',
        color: 'rgba(51, 51, 51, 1)'
    },

    reminderButton:{
        width: 60,
        height: 60,
        borderRadius: 30,
        marginTop: 27,
        marginRight: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(14, 190, 127, 0.08)'
    },

    selectedReminderTime: {
        backgroundColor: 'rgba(14, 190, 127, 1)',
    },

    reminderTimeText:{
        fontSize: 14,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 1)'
    },

    reminderText:{
        fontSize: 14,
        fontWeight: '500',
        color: 'rgba(14, 190, 126, 1)'
    },

    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
});
