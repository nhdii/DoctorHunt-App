import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackArrowIcon from '../assets/icon/backArrowIcon';
import { useNavigation, useRoute } from '@react-navigation/native';
import TextComponent from '../components/textComponent';
import DoctorSelectCard from '../components/doctorSelectCard';
import HeaderComponent from '../components/headerComponent'; 
import GradientCircle from '../components/gradientCircle';

export default function SelectTimeScreen({route}) {

    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState(0); // State để lưu tab được chọn
    const [selectedSlots, setSelectedSlots] = useState({});
    const { doctorInfo } = route.params; // Lấy dữ liệu được truyền từ màn hình trước

    // Hàm xử lý khi người dùng chọn tab
    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };

     // Hàm xử lý khi người dùng chọn slot
    const handleSlotSelect = (index, timeOfDay) => {
        // Kiểm tra xem đã có slot được chọn trong buổi này hay chưa
        if (selectedSlots[timeOfDay] === index) {
            // Nếu đã có, hủy chọn slot hiện tại
            const updatedSelectedSlots = { ...selectedSlots };
            delete updatedSelectedSlots[timeOfDay];
            setSelectedSlots(updatedSelectedSlots);
        } else {
            // Nếu chưa có, chọn slot mới
            setSelectedSlots({ ...selectedSlots, [timeOfDay]: index });
        }
    };



    // Dữ liệu của các tab, ví dụ
    const tabsData = [
        { date: 'Today, 23 Feb', slots: [] }, // Bổ sung thông tin slots cho mỗi ngày
        { date: 'Tomorrow, 24 Feb', slots: ['10:00 PM', '02:00 PM', '06:00 PM', '08:00 PM'] },
        { date: 'Thurday, 25 Feb', slots: ['09:00 AM', '11:00 AM', '03:00 PM', '07:30 PM'] },
    ];

    // Hàm phân loại slot vào buổi chiều và buổi tối
    const classifySlots = (slots) => {
        const timeMap = {
            morning: [],
            afternoon: [],
            evening: []
        };

        slots.forEach((slot) => {
            const time = parseInt(slot.split(':')[0]);
            const isPM = slot.includes("PM");

            if (!isPM && time < 12) {
                timeMap.morning.push(slot);
            } else if ((!isPM && time >= 12) || (isPM && time < 6)) {
                timeMap.afternoon.push(slot);
            } else {
                timeMap.evening.push(slot);
            }
        });

        return timeMap;
    };
    

    // Hàm kiểm tra xem có slot trống không
    const hasAvailableSlots = (index) => {
        return tabsData[index].slots.length > 0;
    };

    const handleContactClinic = () => {
        // Thực hiện các thao tác khi người dùng nhấn vào button "Contact Clinic" ở đây
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.bg}>
                <View style={styles.topGradientCircleContainer}>
                    <GradientCircle size={216} colors={['rgba(135, 206, 235, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
                </View>
                
                <View style={styles.bottomGradientCircleContainer}>
                    <GradientCircle size={216} colors={['rgba(14, 190, 126, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
                </View>
            </View>

            {/* Header */}
            <HeaderComponent title="Select Time" titleColor="rgba(34, 34, 34, 1)"/>

            {/* Doctor Card */}
            <DoctorSelectCard doctorInfo={doctorInfo} />

            {/* Tabs */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
                {tabsData.map((tab, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleTabSelect(index)}
                        style={[
                            styles.tab,
                            selectedTab === index && { backgroundColor: 'rgba(14, 190, 127, 1)' }
                        ]}
                    >
                        <TextComponent fontSize={14} fontWeight='bold' color="rgba(0, 0, 0, 0.7)">{tab.date}</TextComponent>
                        {tab.slots.length > 0 ? (
                            <TextComponent fontSize={12} color="rgba(0, 0, 0, 0.5)">{`${tab.slots.length} slots available`}</TextComponent>
                        ) : (
                            <TextComponent fontSize={12} color="rgba(0, 0, 0, 0.5)">No slots available</TextComponent>
                        )}
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.selectedInfo}>
                <TextComponent fontSize={16} fontWeight='bold' lineHeight={18.96} color='rgba(34, 34, 34, 1)' style={{textAlign: 'center'}}>{tabsData[selectedTab].date}</TextComponent>
                {tabsData[selectedTab].slots.length > 0 ? (
                    <View style={styles.slotContainer}>
                        {Object.entries(classifySlots(tabsData[selectedTab].slots)).map(([timeOfDay, slots]) => (
                            slots.length > 0 && (
                                <View key={timeOfDay}>
                                    <TextComponent style={timeOfDay === 'morning' ? styles.morningSlots : (timeOfDay === 'afternoon' ? styles.afternoonSlots : styles.eveningSlots)}>
                                        {timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)} {slots.length} slots
                                    </TextComponent>
                                    <View style={styles.classifySlots}>
                                        {slots.map((slot, index) => (
                                            <TouchableOpacity 
                                                key={index} 
                                                onPress={() => handleSlotSelect(index, timeOfDay)}
                                                style={[
                                                    styles.slotButton,
                                                    selectedSlots[timeOfDay] === index && { backgroundColor: 'rgba(14, 190, 127, 1)'}
                                                ]}
                                            >
                                                <TextComponent style={[styles.slotText, selectedSlots[timeOfDay] === index && { color: 'rgba(255, 255, 255, 1)', fontWeight: 'bold'}]}>
                                                    {slot}
                                                </TextComponent>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            )
                        ))}
                    </View>
                ) : (
                    <View style={styles.buttonContainer}>
                        <TextComponent style={styles.noSlotText}>No slots available</TextComponent>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Next availability on {tabsData[selectedTab + 1].date}</Text>
                        </TouchableOpacity>
                        <TextComponent style={styles.orText}>OR</TextComponent>
                        <TouchableOpacity style={styles.button} onPress={handleContactClinic}>
                            <Text style={styles.buttonText}>Contact Clinic</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
                
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 34
    },

    textHeader: {
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 21.33,
        letterSpacing: -0.3,
        color: 'rgba(34, 34, 34, 1)',
        marginLeft: 19
    },

    doctorTab: {
        marginTop: 34
    },

    tabContainer: {
        marginTop: 34,
        marginBottom: 10
    },

    tab: {
        width: 130,
        height: 54,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    tabText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)'
    },

    tabSlotText: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.5)'
    },

    selectedInfo: {
        marginTop: 20,
        // alignItems: 'center'
    },

    slotContainer:{
        marginTop: 35,
        flexDirection: 'column',
    },

    classifySlots:{
        flexDirection: 'row'
    },

    morningSlots:{
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 18.96,
        color: 'rgba(34, 34, 34, 1)',
    },

    afternoonSlots:{
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 18.96,
        color: 'rgba(34, 34, 34, 1)',
    },

    eveningSlots:{
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 18.96,
        color: 'rgba(34, 34, 34, 1)',
    },

    slotButton:{
        width: 76,
        height: 40,
        borderRadius: 6,
        backgroundColor: 'rgba(14, 190, 127, 0.08)',
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 14,
        marginBottom: 21

    },

    slotText:{
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        lineHeight: 15.41,
        letterSpacing: -0.3,
        color: 'rgba(14, 190, 127, 1)',
    },

    noSlotText:{
        marginTop: 23,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.59,
        color: 'rgba(103, 114, 148, 1)',
    },

    button: {
        marginTop: 20,
        backgroundColor: 'rgba(14, 190, 127, 1)',
        borderRadius: 8,
        paddingVertical: 15,
        alignItems: 'center'
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },

    orText:{
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.59,
        color: 'rgba(103, 114, 148, 1)',
        textAlign: 'center',
        marginTop: 10,
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
        zIndex: -1
    },
    
    topGradientCircleContainer: {
        position: 'absolute',
        top: -32,
        left: -72,
    },

    bottomGradientCircleContainer: {
        position: 'absolute',
        top: 629,
        left: 228,
    },
});
